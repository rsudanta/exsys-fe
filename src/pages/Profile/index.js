import { useScrollToTop } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Gap, History, ProfileHeader } from '../../component';
import { getHistory, setLoadingHistory, setRefreshing } from '../../redux/action';
import { getData } from '../../utils';
import Modal from "react-native-modal";
import { IcCloseModal } from '../../assets';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import ExtraDimensions from 'react-native-extra-dimensions-android';

const Profile = ({ navigation }) => {
    const ref = React.useRef(null);
    useScrollToTop(ref);
    const dispatch = useDispatch();
    const { history } = useSelector(state => state.historyReducer);
    const { isRefreshing, isLoadingHistory, profile } = useSelector(state => state.globalReducer);

    const [modalVisible, setModalVisible] = useState(false);
    const [arrayNum, setArrayNum] = useState(0);
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = ExtraDimensions.getRealWindowHeight();

    const onRefresh = () => {
        dispatch(setRefreshing(true));
        dispatch(setLoadingHistory(true));
        dispatch(getHistory());
    }

    useEffect(() => {
        dispatch(setLoadingHistory(true));
        dispatch(getHistory());
    }, [history]);
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
            ref={ref}
        >
            <ProfileHeader
                name={profile.name}
                email={profile.email}
                photo={profile.profile_photo_url}
                onPress={() => {
                    navigation.navigate('Setting')
                }}
            />
            <Gap height={20} />
            <View style={styles.container}>
                <Text style={styles.title}>Riwayat</Text>
                <Gap height={4} />
                {isLoadingHistory ?
                    <SkeletonPlaceholder>
                        <View style={{ width: '100%', height: 70, borderRadius: 10, marginTop: 16 }} />
                    </SkeletonPlaceholder>
                    :
                    history.length == 0 ?
                        <View style={styles.emptyContainer}>
                            <Text style={styles.text}>Tidak ada riwayat.</Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => {
                                    navigation.navigate('Question')
                                }}>
                                <Text style={styles.anchor}> Deteksi COVID-19 sekarang</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        history.map((item, index) => {
                            return (
                                <View key={item.id}>
                                    {item.hasil_cf ?
                                        <TouchableOpacity
                                            activeOpacity={0.7}
                                            onPress={() => {
                                                setArrayNum(index);
                                                setModalVisible(true);
                                            }}>
                                            <History
                                                CFValue={item.hasil_cf}
                                                disease={item.penyakit ? item.penyakit.nama_penyakit : ''}
                                                date={item.created_at}
                                            />
                                        </TouchableOpacity>
                                        :
                                        <History
                                            CFValue={item.hasil_cf}
                                            disease={item.penyakit ? item.penyakit.nama_penyakit : ''}
                                            date={item.created_at}
                                        />
                                    }
                                </View>
                            )
                        })}
                <Gap height={20} />
            </View>
            <Modal
                isVisible={modalVisible}
                deviceHeight={deviceHeight}
                deviceWidth={deviceWidth}
                onBackdropPress={() => {
                    setModalVisible(false)
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.closeContainer}>
                        <Text
                            style={styles.title}
                        >{history.length > 0 && history[arrayNum].penyakit ? history[arrayNum].penyakit.nama_penyakit : ''}
                        </Text>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                setModalVisible(false)
                            }}>
                            <IcCloseModal />
                        </TouchableOpacity>
                    </View>
                    <Gap height={8} />
                    <Text
                        style={styles.solusi}
                    >Solusi
                    </Text>
                    <Text
                        style={styles.subTitle}
                    >{history.length > 0 && history[arrayNum].penyakit ? history[arrayNum].penyakit.solusi : ''}
                    </Text>
                </View>
            </Modal>
        </ScrollView >
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: 'white',
        flex: 1
    },
    modalContainer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: 'black'
    },
    subTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: 'black'
    },
    solusi: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: 'black'
    },
    closeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    emptyContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    text: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: 'black'
    },
    anchor: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#557DE5'
    }
});
