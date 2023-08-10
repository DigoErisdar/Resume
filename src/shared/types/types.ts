export interface TargetEvent<T extends EventTarget> extends Omit<Event, 'target'> {
    target: T;
}
