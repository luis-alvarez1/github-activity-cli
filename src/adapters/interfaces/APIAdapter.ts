export interface APIAdapter {
    get<T>(url: string, params: any): Promise<T>;
}
