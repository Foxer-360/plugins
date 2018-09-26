declare class InfoPlugin {
    private listener;
    constructor();
    addListener(l: () => void): void;
    removeListener(): void;
}
export { InfoPlugin, };
