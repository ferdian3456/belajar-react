import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ArrowLeft,
    Building2,
    CircleCheck,
    CircleDot,
    HardHat,
    Lock,
    Phone,
    User,
    Check,
    EyeOff,
    ArrowRight,
} from '@/components/icons';
import { View, Text, Pressable } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';
import { router, Link } from 'expo-router';
import { useState } from 'react';
import { InputField } from '@/components/input-field';
import { Button } from '@/components/button';

type Role = 'owner' | 'mandor';

// untuk switch card ketika aktif
function RoleCard({
    selected,
    onPress,
    icon: Icon,
    title,
    desc,
}: {
    selected: boolean;
    onPress: () => void;
    icon: LucideIcon;
    title: string;
    desc: string;
}) {
    return (
        <Pressable
            onPress={onPress}
            className={`flex flex-1 gap-y-3 rounded-3xl border-2 px-4 py-4 ${
                selected
                    ? 'border-primary bg-primary-soft'
                    : 'border-outline bg-white'
            }`}
        >
            <View className='flex flex-row items-center justify-between'>
                <View
                    className={`flex size-9 items-center justify-center rounded-xl ${selected ? 'bg-primary' : 'bg-field'}`}
                >
                    <Icon className={selected ? 'text-white' : 'text-subtle'} />
                </View>
                {selected ? (
                    <CircleCheck className='text-primary' />
                ) : (
                    <CircleDot className='text-subtle' />
                )}
            </View>
            <Text className='font-jakarta-bold text-foreground'>{title}</Text>
            <Text className='font-jakarta text-muted'>{desc}</Text>
        </Pressable>
    );
}

export default function RegisterScreen() {
    const [show, setShow] = useState(false);
    const [role, setRole] = useState<Role>('owner');

    return (
        <SafeAreaView>
            {/* header */}
            <View className='flex flex-row items-center gap-x-4 px-5 py-5'>
                <Pressable onPress={() => router.back()} hitSlop={8}>
                    <ArrowLeft className='size-6 text-foreground' />
                </Pressable>
                <View className='flex'>
                    <Text className='font-jakarta-bold text-lg text-foreground'>
                        Buat akun MandorKu
                    </Text>
                    <Text className='font-jakarta text-sm text-muted'>
                        Satu akun untuk semua proyekmu
                    </Text>
                </View>
            </View>

            {/* content */}
            <View className='mt-1 px-5'>
                <Text className='font-jakarta-bold uppercase text-muted'>
                    Saya mendaftar sebagai
                </Text>

                <View className='mt-5 flex flex-row gap-x-3'>
                    <RoleCard
                        selected={role === 'owner'}
                        onPress={() => setRole('owner')}
                        icon={Building2}
                        title='Owner'
                        desc='Punya lahan & dana proyek'
                    />
                    <RoleCard
                        selected={role === 'mandor'}
                        onPress={() => setRole('mandor')}
                        icon={HardHat}
                        title='Mandor'
                        desc='Mengerjakan proyek owner'
                    />
                </View>

                {/* input form */}
                <View className='mt-5 flex flex-col gap-y-4'>
                    {/* nama lengkap */}
                    <InputField
                        label='Nama lengkap'
                        icon={User}
                        placeholder='Masukkan nama lengkap anda'
                    />

                    {/* nomor hp */}
                    <InputField
                        label='Nomor Hp'
                        icon={Phone}
                        keyboardType='number-pad'
                        placeholder='Masukkan nomor hp anda'
                    />

                    {/* kata sandi */}
                    <InputField
                        label='Kata Sandi'
                        icon={Lock}
                        placeholder='Masukkan kata sandi anda'
                        secureTextEntry={!show}
                        right={
                            <Pressable
                                onPress={() => setShow(!show)}
                                hitSlop={8}
                            >
                                <EyeOff className='size-[1.188rem] text-muted' />
                            </Pressable>
                        }
                    />
                </View>

                <View className='mt-8 flex flex-row items-center gap-x-[10px]'>
                    <View className='flex size-[18px] items-center justify-center rounded-md bg-primary'>
                        <Check className='size-3 text-white' />
                    </View>
                    <Text className='flex-1 font-jakarta text-xs leading-[18px] text-muted'>
                        Saya setuju pada Syarat Layanan dan Kebijakan Privasi
                        MandorKu.
                    </Text>
                </View>

                {/* daftar sekarang */}
                <Pressable
                    onPress={() => router.replace('/')}
                    className='mt-10'
                >
                    <Button value='Daftar Sekarang' icon={ArrowRight} />
                </Pressable>

                <View className='mt-7 flex flex-row justify-center gap-x-1'>
                    <Text className='font-jakarta text-sm text-muted'>
                        Sudah punya akun?
                    </Text>
                    <Link href='/login'>
                        <Text className='font-jakarta-bold text-sm text-primary'>
                            Masuk
                        </Text>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    );
}
