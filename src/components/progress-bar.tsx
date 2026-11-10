import { View } from 'react-native';

type ProgressBarProps = {
    value: number; // berapa percent
    className?: string; //
    fillClassName?: string;
};

export function ProgressBar({
    value,
    className = 'h-1.5 bg-field',
    fillClassName = 'bg-primary',
}: ProgressBarProps) {
    return (
        <View className={`w-full overflow-hidden rounded-full ${className}`}>
            <View
                className={`h-full rounded-full ${fillClassName}`}
                style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
            ></View>
        </View>
    );
}
