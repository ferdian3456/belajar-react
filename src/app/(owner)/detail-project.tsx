import { View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import {
    ArrowLeft,
    Check,
    CircleCheck,
    CircleDot,
    ChevronRight,
    FileText,
    Lock,
    FileCheck,
} from '@/components/icons';
import { Image } from 'expo-image';
import { ProgressBar } from '@/components/progress-bar';

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
                        <ProgressBar value={40} className='mt-4 h-4 bg-field' />

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
                <View className='mt-6 mx-5 flex flex-col '>
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
                        <ProgressBar
                            value={77}
                            className='mt-4 h-3 bg-primary-dark'
                            fillClassName='bg-field'
                        />

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
                            <Text className='font-jakarta-semibold text-muted text-sm'>
                                Terpakai · 77%
                            </Text>
                            <Text className='font-jakarta-bold text-sm ml-auto'>
                                Rp 143.700.000
                            </Text>
                        </View>

                        {/* divider */}
                        <View className='border-t border-outline w-full'></View>

                        <View className='flex flex-row gap-x-4 items-center'>
                            <View className='bg-field  size-4 rounded-full'></View>
                            <Text className='font-jakarta-semibold text-muted text-sm'>
                                Total uang muka
                            </Text>
                            <Text className='font-jakarta-bold text-sm ml-auto'>
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
                <View className='mt-6 mx-5 flex flex-row justify-between items-center'>
                    <Text className='font-jakarta-bold text-lg'>Milestone</Text>
                    <Text className='font-jakarta-semibold  text-primary text-base'>
                        Lihat semua
                    </Text>
                </View>

                {/* list mileston */}
                <View className='mt-4 mx-5'>
                    {/* m1 */}
                    <View className='flex-row gap-x-3'>
                        <View className='items-center'>
                            <View className='size-7 rounded-xl items-center justify-center bg-success'>
                                <Check className='size-4 text-white' />
                            </View>
                            <View className='w-0.5 flex-1 bg-outline' />
                        </View>
                        <View className='flex-1 mb-3 rounded-2xl bg-white p-4 gap-y-2 border border-outline'>
                            <View className='flex-row items-start justify-between gap-x-2.5'>
                                <Text className='flex-1 font-jakarta-bold text-sm text-foreground'>
                                    M1 · Bongkar & persiapan
                                </Text>
                                <View className='flex-row items-center gap-x-1.5 rounded-xl px-2.5 py-1.5 bg-success-soft'>
                                    <CircleCheck className='size-3 text-success' />
                                    <Text className='font-jakarta-bold text-xs text-success'>
                                        Selesai
                                    </Text>
                                </View>
                            </View>
                            <Text className='font-jakarta text-xs text-muted'>
                                Disetujui 29 Nov · Termin Rp 12.400.000 cair
                            </Text>
                        </View>
                    </View>

                    {/* m2 */}
                    <View className='flex-row gap-x-3'>
                        <View className='items-center'>
                            <View className='size-7 rounded-xl items-center justify-center bg-primary'>
                                <CircleDot className='size-3.5 text-white' />
                            </View>
                            <View className='w-0.5 flex-1 bg-outline' />
                        </View>
                        <View className='flex-1 mb-3 rounded-2xl bg-white p-3.5 gap-y-2 border-2 border-primary'>
                            <View className='flex-row items-start justify-between gap-x-2.5'>
                                <Text className='flex-1 font-jakarta-bold text-sm text-foreground'>
                                    M2 · Pengecoran lantai 2
                                </Text>
                                <View className='flex-row items-center gap-x-1.5 rounded-xl px-2.5 py-1.5 bg-warm-soft'>
                                    <Text className='font-jakarta-bold text-xs text-warm'>
                                        Perlu ditinjau
                                    </Text>
                                </View>
                            </View>
                            <Text className='font-jakarta text-xs text-muted'>
                                12 foto progres · 3 struk menunggu persetujuan
                            </Text>
                        </View>
                    </View>

                    {/* m3 */}
                    <View className='flex-row gap-x-3'>
                        <View className='items-center'>
                            <View className='size-7 rounded-xl items-center justify-center bg-field'>
                                <Text className='font-jakarta-bold text-xs text-subtle'>
                                    M3
                                </Text>
                            </View>
                            <View className='w-0.5 flex-1 bg-outline' />
                        </View>
                        <View className='flex-1 mb-3 rounded-2xl bg-white p-3.5 gap-y-2 border border-outline'>
                            <View className='flex-row items-start justify-between gap-x-2.5'>
                                <Text className='flex-1 font-jakarta-bold text-sm text-foreground'>
                                    M3 · Dinding & atap
                                </Text>
                                <View className='flex-row items-center gap-x-1.5 rounded-xl px-2.5 py-1.5 bg-field'>
                                    <Lock className='size-3 text-subtle' />
                                    <Text className='font-jakarta-bold text-xs text-subtle'>
                                        Terkunci
                                    </Text>
                                </View>
                            </View>
                            <Text className='font-jakarta text-xs text-muted'>
                                Target 30 Jan 2026 · Termin Rp 31.000.000
                            </Text>
                        </View>
                    </View>

                    {/* m4 */}
                    <View className='flex-row gap-x-3'>
                        <View className='items-center'>
                            <View className='size-7 rounded-xl items-center justify-center bg-field'>
                                <Text className='font-jakarta-bold text-xs text-subtle'>
                                    M4
                                </Text>
                            </View>
                        </View>
                        <View className='flex-1 rounded-2xl bg-white p-3.5 gap-y-2 border border-outline'>
                            <View className='flex-row items-start justify-between gap-x-2.5'>
                                <Text className='flex-1 font-jakarta-bold text-sm text-foreground'>
                                    M4 · Plumbing & listrik
                                </Text>
                                <View className='flex-row items-center gap-x-1.5 rounded-xl px-2.5 py-1.5 bg-field'>
                                    <Lock className='size-3 text-subtle' />
                                    <Text className='font-jakarta-bold text-xs text-subtle'>
                                        Terkunci
                                    </Text>
                                </View>
                            </View>
                            <Text className='font-jakarta text-xs text-muted'>
                                Target 25 Feb 2026 · Termin Rp 18.600.000
                            </Text>
                        </View>
                    </View>
                </View>

                <Text className='font-jakarta-bold text-lg mt-6 mx-5'>
                    Berkas & laporan
                </Text>

                {/* perjanjian */}
                <View className='mt-4 mx-5 flex flex-row gap-x-3 justify-between'>
                    <View className='border border-outline gap-y-2 flex flex-col px-3 py-3 flex-1 rounded-2xl'>
                        <View className='bg-field rounded-xl self-start px-3 py-2'>
                            <FileCheck className='text-foreground size-4' />
                        </View>
                        <Text className='font-jakarta-bold text-foreground text-sm'>
                            Laporan M1
                        </Text>
                        <Text className='font-jakarta text-muted text-sm'>
                            PDF · 8.2 MB
                        </Text>
                    </View>
                    <View className='border border-outline gap-y-2 flex flex-col px-3 py-3 flex-1 rounded-2xl'>
                        <View className='bg-field rounded-xl self-start px-3 py-2'>
                            <FileCheck className='text-foreground size-4' />
                        </View>
                        <Text className='font-jakarta-bold text-foreground text-sm'>
                            Perjanjian
                        </Text>
                        <Text className='font-jakarta text-muted text-sm'>
                            PDF · 2.4 MB
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
