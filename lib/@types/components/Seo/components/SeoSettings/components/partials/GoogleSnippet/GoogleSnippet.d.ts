import React from 'react';
interface IGoogleSnippetProps {
    title?: string;
    url?: string;
    description?: string;
}
declare class GoogleSnippet extends React.Component<IGoogleSnippetProps> {
    render(): JSX.Element;
}
export default GoogleSnippet;
