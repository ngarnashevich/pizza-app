import React from 'react';
import ContentLoader from 'react-content-loader';

export const CardSkeleton:React.FC = () => (
    <ContentLoader speed={2} width={320} height={479} viewBox="0 0 320 479" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
        <rect x="180" y="144" rx="0" ry="0" width="1" height="0" />
        <circle cx="156" cy="148" r="110" />
        <rect x="25" y="278" rx="10" ry="10" width="260" height="20" />
        <rect x="24" y="318" rx="10" ry="10" width="260" height="82" />
        <rect x="23" y="428" rx="10" ry="10" width="97" height="27" />
        <rect x="135" y="415" rx="10" ry="10" width="150" height="44" />
    </ContentLoader>
);
