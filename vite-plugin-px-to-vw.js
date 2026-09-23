export default function pxToVwPlugin(options = {}) {
    const { desktopMinWidth = '768px', desktopMaxWidth = '1440px', desktopBaseWidth = 1440, mobileMaxWidth = '767px', mobileBaseWidth = 375 } = options;

    return {
        name: 'vite-plugin-px-to-vw',
        config() {
            return {
                css: {
                    postcss: {
                        plugins: [
                            {
                                postcssPlugin: 'px-to-vw-postcss',
                                Once(root, { AtRule, Rule, Declaration }) {
                                    const file = root.source?.input?.file || '';
                                    if (file.includes('node_modules')) return;

                                    const convertPxToVw = (value, baseWidth) => {
                                        return value.replace(/(-?\d+(\.\d+)?)px\b/g, (match, num) => {
                                            const val = parseFloat(num);
                                            if (Math.abs(val) <= 1) return `${val}px`;
                                            return `${((val / baseWidth) * 100).toFixed(4)}vw`;
                                        });
                                    };

                                    const desktopMedia = new AtRule({
                                        name: 'media',
                                        params: `(min-width: ${desktopMinWidth}) and (max-width: ${desktopMaxWidth})`,
                                        source: root.source,
                                    });

                                    const mobileMedia = new AtRule({
                                        name: 'media',
                                        params: `(max-width: ${mobileMaxWidth})`,
                                        source: root.source,
                                    });

                                    let hasDesktop = false;
                                    let hasMobile = false;

                                    root.walkRules((rule) => {
                                        if (rule.parent && rule.parent.type === 'atrule') return;

                                        let deskRule = null;
                                        let mobRule = null;

                                        rule.walkDecls((decl) => {
                                            if (decl.value && decl.value.includes('px') && !decl.value.includes('/* no-vw */')) {
                                                const deskVal = convertPxToVw(decl.value, desktopBaseWidth);
                                                const mobVal = convertPxToVw(decl.value, mobileBaseWidth);

                                                if (deskVal !== decl.value) {
                                                    if (!deskRule) {
                                                        deskRule = new Rule({ selector: rule.selector, source: rule.source });
                                                    }
                                                    deskRule.append(new Declaration({ prop: decl.prop, value: deskVal, source: decl.source }));
                                                    hasDesktop = true;
                                                }

                                                if (mobVal !== decl.value) {
                                                    if (!mobRule) {
                                                        mobRule = new Rule({ selector: rule.selector, source: rule.source });
                                                    }
                                                    mobRule.append(new Declaration({ prop: decl.prop, value: mobVal, source: decl.source }));
                                                    hasMobile = true;
                                                }
                                            }
                                        });

                                        if (deskRule) desktopMedia.append(deskRule);
                                        if (mobRule) mobileMedia.append(mobRule);
                                    });

                                    root.walkAtRules('media', (atRule) => {
                                        if (atRule === desktopMedia || atRule === mobileMedia) return;

                                        const isMobile = atRule.params.includes(mobileMaxWidth) || !atRule.params.includes('min-width');
                                        const targetBase = isMobile ? mobileBaseWidth : desktopBaseWidth;

                                        atRule.walkDecls((decl) => {
                                            if (decl.value && decl.value.includes('px') && !decl.value.includes('/* no-vw */')) {
                                                decl.value = convertPxToVw(decl.value, targetBase);
                                            }
                                        });
                                    });

                                    const manualMediaNodes = root.nodes.filter((n) => n.type === 'atrule' && n !== desktopMedia && n !== mobileMedia);

                                    if (manualMediaNodes.length > 0) {
                                        const firstManual = manualMediaNodes[0];
                                        if (hasDesktop) root.insertBefore(firstManual, desktopMedia);
                                        if (hasMobile) root.insertBefore(firstManual, mobileMedia);
                                    } else {
                                        if (hasDesktop) root.append(desktopMedia);
                                        if (hasMobile) root.append(mobileMedia);
                                    }
                                },
                            },
                        ],
                    },
                },
            };
        },
    };
}
