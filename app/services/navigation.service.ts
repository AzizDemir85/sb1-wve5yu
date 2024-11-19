import { Frame } from '@nativescript/core';

export class NavigationService {
    navigate(page: string, options?: any) {
        Frame.topmost().navigate({
            moduleName: page,
            context: options?.context,
            transition: {
                name: 'slide'
            }
        });
    }
}