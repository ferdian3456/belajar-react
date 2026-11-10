import { LucideIcon } from 'lucide-react-native';
import { Text, View } from 'react-native';

type ButtonProps = {
    value: string;
    icon: LucideIcon;
};

export function Button({ value, icon: Icon }: ButtonProps) {
    return (
        <View className='flex h-[3.5rem] w-full flex-row items-center justify-center gap-x-2 rounded-2xl bg-primary active:bg-primary-dark'>
            <Text className='font-jakarta-bold text-lg text-white'>
                {value}
            </Text>
            <Icon className='size-[1.125rem] text-white'></Icon>
        </View>
    );
}
