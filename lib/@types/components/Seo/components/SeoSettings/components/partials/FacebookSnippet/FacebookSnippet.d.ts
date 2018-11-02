import React from 'react';
interface IFacebookSnippetProps {
    image?: string;
    title?: string;
    url?: string;
    description?: string;
}
declare class FacebookSnippet extends React.Component<IFacebookSnippetProps> {
    render(): JSX.Element;
}
export default FacebookSnippet;
