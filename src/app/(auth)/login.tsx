import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import {
    HardHat,
    Smartphone,
    Lock,
    EyeOff,
    ArrowRight,
} from '@/components/icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Link, router } from 'expo-router';
import { InputField } from '@/components/input-field';
import { Button } from '@/components/button';

export default function LoginScreen() {
    const [show, setShow] = useState(false);

    return (
        <SafeAreaView>
            {/* hero */}
            <View className='h-[24rem] w-full'>
                {/* image */}
                <Image
                    source={require('../../../assets/images/login-hero.jpeg')}
                    contentFit='cover'
                    className='absolute inset-0'
                />
                <LinearGradient
                    colors={['#1C191766', '#1C1917F7']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    className='absolute inset-0'
                />

                {/* teks hero */}
                <View className='ml-7 mt-32 w-[18.75rem]'>
                    <View className='flex size-[52px] items-center justify-center rounded-2xl bg-primary'>
                        <HardHat className='size-7 text-white'></HardHat>
                    </View>
                    <View className='mt-[1.125rem] flex gap-y-2'>
                        <Text className='font-jakarta-bold text-[38px] leading-[1.1] tracking-[-1px] text-white'>
                            Mandorku
                        </Text>
                        <Text className='font-jakarta text-sm leading-normal text-on-dark'>
                            Cari mandor, pantau progres, dan kontrol uang proyek
                            di satu tempat.
                        </Text>
                    </View>
                </View>
            </View>

            {/* form */}
            <View className='-mt-9  rounded-t-[2.5rem] bg-white px-6 py-6'>
                {/* judul */}
                <View className='flex gap-y-2'>
                    <Text className='font-jakarta-bold text-2xl text-foreground'>
                        Masuk ke Akun
                    </Text>
                    <Text className='font-jakarta text-sm text-muted'>
                        Gunakan nomor HP yang terdaftar untuk melanjutkan proyek
                        kamu.
                    </Text>
                </View>

                {/* input form */}
                <View className='mt-[1.125rem] flex gap-y-4'>
                    <InputField
                        label='Nomor HP'
                        icon={Smartphone}
                        keyboardType='number-pad'
                        placeholder='Masukkan nomor hp anda'
                    />

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

                {/* lupa sandi */}
                <View className='mt-5 flex items-end'>
                    <Text className='font-jakarta-semibold text-sm text-primary'>
                        Lupa sandi?
                    </Text>
                </View>

                {/* masuk */}
                <Pressable onPress={() => router.replace('/')} className='mt-4'>
                    <Button value='Masuk' icon={ArrowRight} />
                </Pressable>

                <View className='mt-6 flex flex-row justify-center gap-x-1'>
                    <Text className='font-jakarta text-sm text-muted'>
                        Belum punya akun?
                    </Text>
                    <Link href='/register'>
                        <Text className='font-jakarta-bold text-sm text-primary'>
                            Daftar sekarang
                        </Text>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    );
}
