import { View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import {
    ArrowLeft,
    CircleCheck,
    ChevronRight,
    FileText,
} from '@/components/icons';
import { Image } from 'expo-image';

export default function DetailProjectScreen() {
    return (
        <SafeAreaView className='flex-1' edges={['top', 'bottom']}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName='pb-6'
            >
                {/* header */}
                <View className='flex flex-row items-center gap-x-4 mx-5 my-5'>
                    <Pressable onPress={() => router.replace('/')} hitSlop={8}>
                        <ArrowLeft className='size-6 text-foreground' />
                    </Pressable>
                    <View className='flex'>
                        <Text className='font-jakarta-bold text-lg text-foreground'>
                            Renovasi Rumah Kebayoran
                        </Text>
                        <Text className='font-jakarta text-sm text-muted'>
                            Pak Dedi Supriyadi · Mulai 15 Nov 2025
                        </Text>
                    </View>
                </View>

                {/* kategori */}
                <View className='mt-1 flex flex-row justify-between mx-5 bg-field px-3 py-2 rounded-2xl items-center '>
                    <View className='bg-white px-3 py-2 rounded-xl'>
                        <Text className='font-jakarta-bold text-sm text-foreground'>
                            Ringkasan
                        </Text>
                    </View>
                    <View className='px-3 py-2 rounded-3xl'>
                        <Text className='font-jakarta text-sm text-muted'>
                            Milestone
                        </Text>
                    </View>
                    <View className='px-3 py-2 rounded-3xl'>
                        <Text className='font-jakarta text-sm text-muted'>
                            Struk
                        </Text>
                    </View>
                    <View className='px-3 py-2 rounded-3xl'>
                        <Text className='font-jakarta text-sm text-muted'>
                            Berkas
                        </Text>
                    </View>
                </View>

                {/* progress */}
                <View className='mt-5 mx-5 bg-white border rounded-2xl border-outline'>
                    {/* progress */}
                    <View className='px-4 py-4'>
                        <View className='flex flex-row justify-between'>
                            <View className='flex flex-col gap-y-2'>
                                <Text className='text-sm font-jakarta text-muted'>
                                    Progress Keseluruhan
                                </Text>
                                <Text className='font-jakarta-bold text-3xl text-foreground'>
                                    40%
                                </Text>
                            </View>
                            <View className='bg-success-soft flex flex-row items-center justify-center gap-x-1 self-start rounded-xl px-2 py-2 '>
                                <CircleCheck className='text-success size-4' />
                                <Text className='text-success font-jakarta-bold text-xs'>
                                    Sesuai jadwal
                                </Text>
                            </View>
                        </View>

                        {/* progress bar */}
                        <View className='mt-4 h-4 w-full overflow-hidden rounded-full bg-field'>
                            <View className='h-full w-[40%] rounded-full bg-primary' />
                        </View>

                        <View className='flex flex-row gap-x-1 mt-4 justify-between'>
                            <View className='flex flex-col gap-y-1 bg-field px-5 py-3 rounded-2xl'>
                                <Text className='font-jakarta text-muted text-xs'>
                                    Milestone
                                </Text>
                                <Text className='font-jakarta-bold text-base text-foreground'>
                                    2/5
                                </Text>
                            </View>
                            <View className='flex flex-col gap-y-1 bg-field px-5 py-3 rounded-2xl'>
                                <Text className='font-jakarta text-muted text-xs'>
                                    Hari berjalan
                                </Text>
                                <Text className='font-jakarta-bold text-base text-foreground'>
                                    38
                                </Text>
                            </View>
                            <View className='flex flex-col gap-y-1 bg-field px-5 py-3 rounded-2xl'>
                                <Text className='font-jakarta text-muted text-xs'>
                                    Sisa waktu
                                </Text>
                                <Text className='font-jakarta-bold text-base text-foreground'>
                                    82 hari
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* sisa uang */}
                <View className='mt-5 mx-5 flex flex-col '>
                    {/* sisa uang */}
                    <View className='px-4 py-4 bg-primary rounded-t-3xl'>
                        {/* 1 */}
                        <View className='flex flex-row justify-between items-center'>
                            <Text className='font-jakarta text-white text-sm'>
                                Sisa uang muka material
                            </Text>
                            <View className='self-start px-3 py-2 bg-primary-dark rounded-3xl flex flex-row gap-x-1 items-center'>
                                <Image
                                    source={require('../../../assets/images/mandor-profile-example.avif')}
                                    contentFit='cover'
                                    className='size-6 rounded-full'
                                />
                                <Text className='font-jakarta-medium text-sm text-white'>
                                    Pak Dedi
                                </Text>
                            </View>
                        </View>

                        {/* 2 */}
                        <View className='mt-2 flex flex-row gap-x-2 items-end'>
                            <Text className='text-sm font-jakarta-semibold text-white'>
                                Rp
                            </Text>
                            <Text className='font-jakarta-bold text-3xl   text-white'>
                                42.300.000
                            </Text>
                        </View>

                        {/* 3 progress bar */}
                        <View className='mt-4 h-3 w-full overflow-hidden rounded-full bg-primary-dark'>
                            <View className='h-full w-[73%] rounded-full bg-field' />
                        </View>

                        <View className='mt-4 flex flex-row justify-between'>
                            <Text className='text-white  font-jakarta-semibold text-sm'>
                                77% terpakai
                            </Text>
                            <Text className='text-white font-jakarta-semibold text-sm'>
                                23% sisa
                            </Text>
                        </View>
                    </View>

                    <View className='bg-white rounded-b-3xl px-4 py-4 border-b border border-outline flex flex-col gap-y-3'>
                        <View className='flex flex-row gap-x-4 items-center'>
                            <View className='bg-primary size-4 rounded-full'></View>
                            <Text className='font-jakarta-semibold text-muted text-base'>
                                Terpakai · 77%
                            </Text>
                            <Text className='font-jakarta-bold text-base ml-auto'>
                                Rp 143.700.000
                            </Text>
                        </View>

                        {/* divider */}
                        <View className='border-t border-outline w-full'></View>

                        <View className='flex flex-row gap-x-4 items-center'>
                            <View className='bg-field  size-4 rounded-full'></View>
                            <Text className='font-jakarta-semibold text-muted text-base'>
                                Total uang muka
                            </Text>
                            <Text className='font-jakarta-bold text-base ml-auto'>
                                Rp 186.000.000
                            </Text>
                        </View>

                        {/* divider */}
                        <View className='border-t border-outline w-full'></View>

                        <View className='flex flex-row gap-x-2 items-center'>
                            <CircleCheck
                                className='size-7 text-white '
                                fill='#14803C'
                            />
                            <Text className='font-jakarta-bold text-base'>
                                18 struk disetujui
                            </Text>
                            <View className='flex flex-row gap-x-2 items-center ml-auto'>
                                <Text className='font-jakarta-semibold text-primary text-base'>
                                    Lihat struk
                                </Text>
                                <ChevronRight className='text-primary size-5' />
                            </View>
                        </View>
                    </View>
                </View>

                {/* milestone text */}
                <View className='mt-5 mx-5 flex flex-row justify-between items-center'>
                    <Text className='font-jakarta-bold text-lg'>Milestone</Text>
                    <Text className='font-jakarta-semibold  text-primary text-base'>
                        Lihat semua
                    </Text>
                </View>

                <Text className='font-jakarta-bold text-lg mt-5 mx-5'>
                    Berkas & laporan
                </Text>

                <View className='mt-3 mx-5 flex flex-row justify-between'>
                    {/* pdf */}
                    <View className='bg-white border border-outline rounded-2xl flex flex-row  items-center gap-x-3 px-5 py-3'>
                        <View className='bg-field rounded-2xl self-start px-3 py-3'>
                            <FileText className='text-muted size-6' />
                        </View>
                        <View className='flex flex-col gap-y-1'>
                            <Text className='font-jakarta-bold text-sm'>
                                Laporan M1
                            </Text>
                            <Text className='font-jakarta text-muted text-xs'>
                                PDF · 8.2 MB
                            </Text>
                        </View>
                    </View>

                    {/* perjanjian */}
                    <View className='bg-white border border-outline rounded-2xl flex flex-row  items-center gap-x-3 px-5 py-3'>
                        <View className='bg-field rounded-2xl self-start px-3 py-3'>
                            <FileText className='text-muted size-6' />
                        </View>
                        <View className='flex flex-col gap-y-1'>
                            <Text className='font-jakarta-bold text-sm'>
                                Perjanjian
                            </Text>
                            <Text className='font-jakarta text-muted text-xs'>
                                PDF · 2.4 MB
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
