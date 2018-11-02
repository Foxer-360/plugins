import React from 'react';
interface ITwitterSnippetProps {
    image: string;
    title: string;
    text: string;
}
declare class TwitterSnippet extends React.Component<ITwitterSnippetProps> {
    render(): JSX.Element;
}
export default TwitterSnippet;
