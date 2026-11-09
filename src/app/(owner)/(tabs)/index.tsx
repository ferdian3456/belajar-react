import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import {
    Bell,
    ChevronRight,
    FileCheck,
    History,
    Images,
    Lock,
    Plus,
    Receipt,
    CircleDot,
} from '@/components/icons';
import { router } from 'expo-router';

export default function HomeScreen() {
    return (
        <SafeAreaView className='flex-1' edges={['top']}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName='pb-6'
            >
                {/* header */}
                <View className='flex flex-row items-center gap-x-5 px-5 py-5'>
                    <Image
                        source={require('../../../../assets/images/profile-example.jpeg')}
                        contentFit='cover'
                        className='size-11 rounded-3xl'
                    />
                    <View className=''>
                        <Text className='font-jakarta-bold text-lg text-foreground'>
                            Halo, Budi
                        </Text>
                        <Text className='font-jakarta text-sm text-muted'>
                            Owner
                        </Text>
                    </View>
                    <Bell className='ml-auto' />
                </View>

                {/* content */}
                <View className='px-5'>
                    {/* dashboard */}
                    <View className='rounded-xl bg-primary px-5 py-5 '>
                        {/* dana */}
                        <View className='flex flex-col gap-y-2'>
                            <Text className='text-sm text-on-dark'>
                                Dana di rekening penampung
                            </Text>
                            <Text className='font-jakarta-bold text-2xl text-white'>
                                Rp185.000.000
                            </Text>
                        </View>

                        {/* dana material & upah tertahan */}
                        <View className='mt-4 flex flex-row gap-x-3'>
                            <View className='flex flex-1 gap-y-1 rounded-2xl bg-white px-3 py-3'>
                                {/* 1 */}
                                <View className='flex flex-row items-center gap-x-2'>
                                    <Receipt className='size-3 text-primary' />
                                    <Text className='text-xs text-muted'>
                                        Dana material tersisa
                                    </Text>
                                </View>

                                {/* 2 */}
                                <Text className='font-jakarta-bold text-sm'>
                                    Rp 42.300.000
                                </Text>
                            </View>

                            <View className='flex flex-1 gap-y-1 rounded-2xl bg-white px-3 py-3'>
                                {/* 1 */}
                                <View className='flex flex-row items-center gap-x-2'>
                                    <Lock className='size-3 text-primary' />
                                    <Text className='text-xs text-muted'>
                                        Upah tertahan
                                    </Text>
                                </View>

                                {/* 2 */}
                                <Text className='font-jakarta-bold text-sm'>
                                    Rp 96.000.000
                                </Text>
                            </View>
                        </View>

                        {/* setor dana dan riwayat */}
                        <View className='mt-4 flex flex-row gap-x-3'>
                            {/* setor dana */}
                            <View className='flex flex-1 flex-row items-center justify-center gap-x-2 rounded-2xl bg-white px-2 py-4'>
                                <Plus className='size-5 text-primary' />
                                <Text className='font-jakarta-bold text-sm text-primary'>
                                    Setor dana
                                </Text>
                            </View>

                            {/* riwayat */}
                            <View className='flex flex-1 flex-row items-center justify-center gap-x-2 rounded-2xl bg-[#FFFFFF2E] px-2 py-4'>
                                <History className='size-5 text-white' />
                                <Text className='font-jakarta-bold text-sm text-white'>
                                    Riwayat
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* perlu tindakan kamu */}
                    <View className='mt-5 flex flex-row justify-between'>
                        <Text className='font-jakarta-bold text-sm'>
                            Perlu tindakan kamu
                        </Text>
                        <Text className='font-jakarta-bold text-xs text-primary'>
                            Lihat semua
                        </Text>
                    </View>

                    {/* List tindakan */}
                    <View className='mt-5 flex gap-y-2'>
                        {/* 1 */}
                        <View className='flex flex-row items-center gap-x-4 rounded-2xl border border-outline bg-white px-3 py-3 '>
                            {/* icon */}
                            <View className='bg-warm-soft flex size-9 items-center justify-center rounded-xl'>
                                <Receipt className='text-warm size-5' />
                            </View>
                            <View className='flex gap-y-1'>
                                <Text className='font-jakarta-bold  text-sm text-foreground'>
                                    3 struk material renovasi
                                </Text>
                                <Text className='text-xs text-muted'>
                                    Renovasi Rumah Kebayoran
                                </Text>
                            </View>
                            <ChevronRight className='ml-auto size-5 text-subtle' />
                        </View>

                        {/* 2 */}
                        <View className='flex flex-row items-center gap-x-4 rounded-2xl border border-outline bg-white px-3 py-3 '>
                            {/* icon */}
                            <View className='bg-info-soft flex size-9 items-center justify-center rounded-xl'>
                                <Images className='text-info size-5' />
                            </View>
                            <View className='flex gap-y-1'>
                                <Text className='font-jakarta-bold  text-sm text-foreground'>
                                    Milestone 2 siap tinjau
                                </Text>
                                <Text className='text-xs text-muted'>
                                    12 foto progress diunggah mandor
                                </Text>
                            </View>
                            <ChevronRight className='ml-auto size-5 text-subtle' />
                        </View>

                        {/* 3 */}
                        <View className='flex flex-row items-center gap-x-4 rounded-2xl border border-outline bg-white px-3 py-3 '>
                            {/* icon */}
                            <View className='bg-success-soft flex size-9 items-center justify-center rounded-xl'>
                                <FileCheck className='text-success size-5' />
                            </View>
                            <View className='flex gap-y-1'>
                                <Text className='font-jakarta-bold  text-sm text-foreground'>
                                    Penawaran baru dari Pak Dedi
                                </Text>
                                <Text className='text-xs text-muted'>
                                    Rp 310.000.000 · 120 hari
                                </Text>
                            </View>
                            <ChevronRight className='ml-auto size-5 text-subtle' />
                        </View>
                    </View>

                    <View className='mt-5 flex flex-row justify-between'>
                        <Text className='font-jakarta-bold text-sm'>
                            Proyek aktif
                        </Text>
                        <Text className='font-jakarta-bold text-xs text-primary'>
                            1 proyek
                        </Text>
                    </View>

                    <Pressable
                        className='mt-5 bg-white'
                        onPress={() => router.replace('/detail-project')}
                    >
                        <Image
                            source={require('../../../../assets/images/project-example.jpeg')}
                            contentFit='cover'
                            className='h-[8.125rem]'
                        />

                        <View className='px-4 py-4'>
                            {/* renovasi */}
                            <View className='mt-4 flex flex-row justify-between'>
                                <View className='flex-colgap-y-1 flex'>
                                    <Text className='font-jakarta-bold text-sm'>
                                        Renovasi Rumah Kebayoran
                                    </Text>
                                    <Text className='text-xs text-muted'>
                                        Mandor: Pak Dedi Supriyadi
                                    </Text>
                                </View>
                                <View className='bg-success-soft flex flex-row items-center justify-center gap-x-1 self-start rounded-xl px-2 py-2 '>
                                    <CircleDot className='text-success size-4' />
                                    <Text className='text-success font-jakarta-bold text-xs'>
                                        Berjalan
                                    </Text>
                                </View>
                            </View>

                            {/* milestone */}
                            <View className='flex flex-col gap-y-3'>
                                <View className='mt-5 flex flex-row justify-between'>
                                    <Text className='font-jakarta text-xs text-muted'>
                                        Milestone 2 dari 5 · Pengecoran lantai 2
                                    </Text>
                                    <Text className='font-jakarta-bold text-xs text-primary'>
                                        40%
                                    </Text>
                                </View>
                                <View className='h-1.5 w-full overflow-hidden rounded-full bg-field'>
                                    <View className='h-full w-[40%] rounded-full bg-primary' />
                                </View>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
