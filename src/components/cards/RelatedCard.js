import React from 'react';

function RelatedCard({ related }) {
    return (
        <div>
            {related.map((r) => (
                <div>{r.title}</div>
            ))}
        </div>
    );
}

export default RelatedCard;
