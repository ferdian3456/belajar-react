import { View, Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Search, SlidersHorizontal, Star } from '@/components/icons';
import { Image } from 'expo-image';

export default function FindMandorScreen() {
    return (
        <SafeAreaView className='flex-1' edges={['top']}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName='pb-6'
            >
                {/* header */}
                <View className='h-[13.5rem] rounded rounded-b-3xl bg-primary px-5 py-5'>
                    {/* teks */}
                    <View className='flex gap-y-1 '>
                        <Text className='font-jakarta-semibold text-2xl text-white'>
                            Setiap proyek besar,
                        </Text>
                        <Text className='font-jakarta text-2xl italic text-white'>
                            dimulai dari orang yang tepat.
                        </Text>
                    </View>

                    {/* lokasi */}
                    <View className='mt-4 flex flex-row items-center  gap-x-2'>
                        <MapPin className='size-4 text-white' />
                        <Text className='font-jakarta-semibold text-xs text-white '>
                            Jakarta Selatan
                        </Text>
                    </View>

                    {/* search */}
                    <View className='mt-5 flex flex-row items-center gap-x-3 rounded-xl bg-white px-3'>
                        <Search className='size-4 text-subtle'></Search>
                        <TextInput
                            className='font-jakarta text-foreground'
                            placeholder='Cari nama mandor'
                        />
                        <SlidersHorizontal className='ml-auto size-4 text-subtle' />
                    </View>
                </View>

                {/* menampilkan */}
                <Text className='mt-5 px-5 font-jakarta-medium text-xs text-muted'>
                    Menampilkan 24 mandor di Jakarta Selatan
                </Text>

                {/* content card */}
                <View className='mt-5 flex gap-y-4 px-5'>
                    {/* card */}
                    {/* 1 */}
                    <View className='flex flex-col rounded-3xl  bg-white px-3 py-3'>
                        <View className='flex flex-row gap-x-3'>
                            <Image
                                source={require('../../../../assets/images/mandor-profile-example.avif')}
                                contentFit='cover'
                                className='size-14 rounded-full'
                            />
                            <View className='flex flex-col gap-y-2'>
                                {/* info */}

                                <View className='just flex flex-col gap-y-[0.4rem]'>
                                    <Text className='font-jakarta-bold text-sm'>
                                        Dedi Supriyadi
                                    </Text>
                                    <View className='flex flex-row gap-x-2'>
                                        <Star
                                            stroke={'none'}
                                            fill={'#FBBC04'}
                                            className='size-4'
                                        />
                                        <Text className='font-jakarta-bold text-xs'>
                                            4.9
                                        </Text>
                                        <Text className='font-jakarta text-xs text-muted'>
                                            (48 ulasan)
                                        </Text>
                                    </View>
                                    <View className='flex flex-row gap-x-2'>
                                        <MapPin className='size-4 text-muted' />
                                        <Text className='font-jakarta text-xs'>
                                            Jakarta Selatan · 2.1 km
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className='mt-4'>
                            <Image
                                source={require('../../../../assets/images/mandor-project-example.jpg')}
                                contentFit='cover'
                                className='h-48 rounded-xl'
                            />
                            <View className='absolute bottom-3 left-3  rounded-xl bg-black/70 px-3 py-2'>
                                <Text className='font-jakarta-semibold text-sm text-white'>
                                    Renovasi Rumah di Graha Padma
                                </Text>
                            </View>
                        </View>

                        {/* harGa */}
                        <View></View>
                        <View className='mt-4 flex gap-y-1'>
                            <View className='flex flex-row justify-end'>
                                <Text className='font-jakarta text-xs text-muted'>
                                    mulai dari
                                </Text>
                            </View>
                            <View className='flex flex-row justify-end'>
                                <Text className='font-jakarta-bold text-[1rem]'>
                                    Rp 1,2 jt/m²
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* 2 */}
                    <View className='flex flex-col rounded-3xl  bg-white px-3 py-3'>
                        <View className='flex flex-row gap-x-3'>
                            <Image
                                source={require('../../../../assets/images/mandor-profile-example-1.avif')}
                                contentFit='cover'
                                className='size-14 rounded-full'
                            />
                            <View className='flex flex-col gap-y-2'>
                                {/* info */}

                                <View className='just flex flex-col gap-y-[0.4rem]'>
                                    <Text className='font-jakarta-bold text-sm'>
                                        Dedi Supriyadi
                                    </Text>
                                    <View className='flex flex-row gap-x-2'>
                                        <Star
                                            stroke={'none'}
                                            fill={'#FBBC04'}
                                            className='size-4'
                                        />
                                        <Text className='font-jakarta-bold text-xs'>
                                            4.9
                                        </Text>
                                        <Text className='font-jakarta text-xs text-muted'>
                                            (48 ulasan)
                                        </Text>
                                    </View>
                                    <View className='flex flex-row gap-x-2'>
                                        <MapPin className='size-4 text-muted' />
                                        <Text className='font-jakarta text-xs'>
                                            Jakarta Selatan · 2.1 km
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className='mt-4'>
                            <Image
                                source={require('../../../../assets/images/mandor-project-example-1.jpg')}
                                contentFit='cover'
                                className='h-48 rounded-xl'
                            />
                            <View className='absolute bottom-3 left-3  rounded-xl bg-black/70 px-3 py-2'>
                                <Text className='font-jakarta-semibold text-sm text-white'>
                                    Renovasi Rumah di Graha Padma
                                </Text>
                            </View>
                        </View>

                        {/* harGa */}
                        <View></View>
                        <View className='mt-4 flex gap-y-1'>
                            <View className='flex flex-row justify-end'>
                                <Text className='font-jakarta text-xs text-muted'>
                                    mulai dari
                                </Text>
                            </View>
                            <View className='flex flex-row justify-end'>
                                <Text className='font-jakarta-bold text-[1rem]'>
                                    Rp 1,2 jt/m²
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* 3 */}
                    <View className='flex flex-col rounded-3xl  bg-white px-3 py-3'>
                        <View className='flex flex-row gap-x-3'>
                            <Image
                                source={require('../../../../assets/images/mandor-profile-example-2.avif')}
                                contentFit='cover'
                                className='size-14 rounded-full'
                            />
                            <View className='flex flex-col gap-y-2'>
                                {/* info */}

                                <View className='just flex flex-col gap-y-[0.4rem]'>
                                    <Text className='font-jakarta-bold text-sm'>
                                        Dedi Supriyadi
                                    </Text>
                                    <View className='flex flex-row gap-x-2'>
                                        <Star
                                            stroke={'none'}
                                            fill={'#FBBC04'}
                                            className='size-4'
                                        />
                                        <Text className='font-jakarta-bold text-xs'>
                                            4.9
                                        </Text>
                                        <Text className='font-jakarta text-xs text-muted'>
                                            (48 ulasan)
                                        </Text>
                                    </View>
                                    <View className='flex flex-row gap-x-2'>
                                        <MapPin className='size-4 text-muted' />
                                        <Text className='font-jakarta text-xs'>
                                            Jakarta Selatan · 2.1 km
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className='mt-4'>
                            <Image
                                source={require('../../../../assets/images/mandor-project-example-2.jpg')}
                                contentFit='cover'
                                className='h-48 rounded-xl'
                            />
                            <View className='absolute bottom-3 left-3  rounded-xl bg-black/70 px-3 py-2'>
                                <Text className='font-jakarta-semibold text-sm text-white'>
                                    Renovasi Rumah di Graha Padma
                                </Text>
                            </View>
                        </View>

                        {/* harGa */}
                        <View></View>
                        <View className='mt-4 flex gap-y-1'>
                            <View className='flex flex-row justify-end'>
                                <Text className='font-jakarta text-xs text-muted'>
                                    mulai dari
                                </Text>
                            </View>
                            <View className='flex flex-row justify-end'>
                                <Text className='font-jakarta-bold text-[1rem]'>
                                    Rp 1,2 jt/m²
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* 4 */}
                    <View className='flex flex-col rounded-3xl  bg-white px-3 py-3'>
                        <View className='flex flex-row gap-x-3'>
                            <Image
                                source={require('../../../../assets/images/mandor-profile-example-3.avif')}
                                contentFit='cover'
                                className='size-14 rounded-full'
                            />
                            <View className='flex flex-col gap-y-2'>
                                {/* info */}

                                <View className='just flex flex-col gap-y-[0.4rem]'>
                                    <Text className='font-jakarta-bold text-sm'>
                                        Dedi Supriyadi
                                    </Text>
                                    <View className='flex flex-row gap-x-2'>
                                        <Star
                                            stroke={'none'}
                                            fill={'#FBBC04'}
                                            className='size-4'
                                        />
                                        <Text className='font-jakarta-bold text-xs'>
                                            4.9
                                        </Text>
                                        <Text className='font-jakarta text-xs text-muted'>
                                            (48 ulasan)
                                        </Text>
                                    </View>
                                    <View className='flex flex-row gap-x-2'>
                                        <MapPin className='size-4 text-muted' />
                                        <Text className='font-jakarta text-xs'>
                                            Jakarta Selatan · 2.1 km
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className='mt-4'>
                            <Image
                                source={require('../../../../assets/images/mandor-project-example-3.jpg')}
                                contentFit='cover'
                                className='h-48 rounded-xl'
                            />
                            <View className='absolute bottom-3 left-3  rounded-xl bg-black/70 px-3 py-2'>
                                <Text className='font-jakarta-semibold text-sm text-white'>
                                    Renovasi Rumah di Graha Padma
                                </Text>
                            </View>
                        </View>

                        {/* harGa */}
                        <View></View>
                        <View className='mt-4 flex gap-y-1'>
                            <View className='flex flex-row justify-end'>
                                <Text className='font-jakarta text-xs text-muted'>
                                    mulai dari
                                </Text>
                            </View>
                            <View className='flex flex-row justify-end'>
                                <Text className='font-jakarta-bold text-[1rem]'>
                                    Rp 1,2 jt/m²
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* 5 */}
                    <View className='flex flex-col rounded-3xl  bg-white px-3 py-3'>
                        <View className='flex flex-row gap-x-3'>
                            <Image
                                source={require('../../../../assets/images/mandor-profile-example-4.avif')}
                                contentFit='cover'
                                className='size-14 rounded-full'
                            />
                            <View className='flex flex-col gap-y-2'>
                                {/* info */}

                                <View className='just flex flex-col gap-y-[0.4rem]'>
                                    <Text className='font-jakarta-bold text-sm'>
                                        Dedi Supriyadi
                                    </Text>
                                    <View className='flex flex-row gap-x-2'>
                                        <Star
                                            stroke={'none'}
                                            fill={'#FBBC04'}
                                            className='size-4'
                                        />
                                        <Text className='font-jakarta-bold text-xs'>
                                            4.9
                                        </Text>
                                        <Text className='font-jakarta text-xs text-muted'>
                                            (48 ulasan)
                                        </Text>
                                    </View>
                                    <View className='flex flex-row gap-x-2'>
                                        <MapPin className='size-4 text-muted' />
                                        <Text className='font-jakarta text-xs'>
                                            Jakarta Selatan · 2.1 km
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View className='mt-4'>
                            <Image
                                source={require('../../../../assets/images/mandor-project-example-4.jpg')}
                                contentFit='cover'
                                className='h-48 rounded-xl'
                            />
                            <View className='absolute bottom-3 left-3  rounded-xl bg-black/70 px-3 py-2'>
                                <Text className='font-jakarta-semibold text-sm text-white'>
                                    Renovasi Rumah di Graha Padma
                                </Text>
                            </View>
                        </View>

                        {/* harGa */}
                        <View></View>
                        <View className='mt-4 flex gap-y-1'>
                            <View className='flex flex-row justify-end'>
                                <Text className='font-jakarta text-xs text-muted'>
                                    mulai dari
                                </Text>
                            </View>
                            <View className='flex flex-row justify-end'>
                                <Text className='font-jakarta-bold text-[1rem]'>
                                    Rp 1,2 jt/m²
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
