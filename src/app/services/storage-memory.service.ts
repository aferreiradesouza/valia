import { Injectable } from "@angular/core";

interface Storage {
    headers?: any;
}

@Injectable({
    providedIn: 'root',
})

export class StorageMemoryService {

    public storage: Storage;

    constructor() {
        if (!this.storage) {
            this.storage = {
                headers: null
            };
        }
    }

    clear() {
        this.storage.headers = null;
    }
}
