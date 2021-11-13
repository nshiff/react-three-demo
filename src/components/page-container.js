import React from 'react';
import ConfigPanel from './config-panel';
import VisualizationPanel from './visualization-panel';

const PageContainer = () => {
    return (
        <div className="page-container">
            <VisualizationPanel />
            <ConfigPanel />
        </div>
    );
};

export default PageContainer;
