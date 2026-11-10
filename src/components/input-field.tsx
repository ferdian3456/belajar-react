import { ReactNode, useState } from 'react';
import { TextInputProps, Text, View, TextInput } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';

type InputFieldProps = TextInputProps & {
    label: string;
    icon: LucideIcon;
    right?: ReactNode;
};

// ketika "focus:" nanti warna border dan text berubah. gk bisa pake class focus: bawaan nativewind
export function InputField({
    label,
    icon: Icon,
    right,
    ...props
}: InputFieldProps) {
    const [focused, setFocused] = useState(false);

    return (
        <View>
            <Text className='font-jakarta-semibold text-[12.5px] text-muted'>
                {label}
            </Text>
            <View
                className={`mt-[7px] flex h-[3.375rem] flex-row items-center gap-x-3 rounded-[14px] bg-field px-4 ${focused ? 'border-[1.5px] border-primary' : 'border border-outline'}`}
            >
                <Icon
                    className={`size-[1.188rem] ${focused ? 'text-primary' : 'text-subtle'}`}
                />
                <TextInput
                    className='flex-1 font-jakarta text-[15px] text-foreground'
                    {...props}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
                {right}
            </View>
        </View>
    );
}
