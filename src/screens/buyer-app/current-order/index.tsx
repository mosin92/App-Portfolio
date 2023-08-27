import {View, Text, Pressable, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {H1, H2} from '~components/text/text';
import AppColors from '~utils/app-colors';
import {CommonStyles, width} from '~utils';
import {Button, OrderHeader, OrderItemCard} from '~components';
import {useSelector} from 'react-redux';
import {selectLanguage} from '~store/slices/language';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScreenWrapper} from 'react-native-screen-wrapper';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontFamily from '~utils/font-family';

const orderItems = [
  {
    id: 1,
    name: 'Honey Pencake',
    img: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    quantity: 2,
    price: 10,
    refno: 32893023,
  },
  {
    id: 2,
    name: 'Honey Pencake',
    img: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    quantity: 2,
    price: 10,
    refno: 32893023,
  },
];

const OrderTrackStatus = [
  {
    id: 1,
    active: false,
    covered: true,
    name: 'Preparing',
  },
  {
    id: 2,
    active: false,
    covered: true,
    name: 'Ready to pickup',
  },
  {
    id: 3,
    active: false,
    covered: true,
    name: 'on your way',
  },
  {
    id: 4,
    active: true,
    covered: false,
    name: 'Delivered',
  },
];

const CurrentOrder = ({navigation}: NativeStackScreenProps<any>) => {
  const selectedLanguage = useSelector(selectLanguage);

  const renderOrderDetailCard = () => {
    return (
      <View style={styles.orderDetailContainer}>
        {/* card-header */}
        <View style={styles.cardheader}>
          <H2 color={AppColors.gray3}>OR ID:</H2>
          <H2>OR56DSFXZD4</H2>
        </View>
        {/* order-item-name */}
        <View style={styles.ordername}>
          {/* store-name */}
          <H1 numberOfLines={3} size={5} textStyles={styles.storename}>
            Sweethouse Store
          </H1>
          {/* call-To-action */}
          <View style={styles.row}>
            {/* call-icon */}
            <Pressable style={styles.callToActionBtn}>
              <Feather name="phone" color={AppColors.blue} size={width(4)} />
            </Pressable>
            {/* message-icon */}
            <Pressable style={styles.callToActionBtn}>
              <Feather
                name="message-square"
                color={AppColors.blue}
                size={width(4)}
              />
            </Pressable>
          </View>
        </View>
        {/* order-delivery-loc */}
        <H2 color={AppColors.blue63} textStyles={styles.orderloc}>
          230,Golden street, 23th East Street New York.
        </H2>
        {/* body-sec */}
        <View>
          {/* item-image */}
          <Image
            resizeMode="cover"
            source={{
              uri: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            }}
            style={styles.itemImg}
          />
          {/* order-status */}
          <View style={styles.orderstatus}>
            <View style={styles.lineStyle} />
            {/* status-box */}
            <H2
              size={5}
              textAlign="center"
              containerStyles={styles.orderStatusContainer}
              color={AppColors.white}>
              Pending
            </H2>
            <View style={styles.lineStyle} />
          </View>
          {/* order-invoice */}
          <View>
            {/* price */}
            <View style={styles.invoice}>
              {/* title */}
              <H2>Price:</H2>
              {/* value */}
              <H2>SAR210</H2>
            </View>
            {/* time-left */}
            <View style={styles.invoice}>
              {/* title */}
              <H2>Time Left:</H2>
              {/* value */}
              <H2>1day,18 hours</H2>
            </View>
          </View>
        </View>
        {/* footer */}
        <H2
          containerStyles={styles.invoiceFooter}
          color={AppColors.gray3}
          textAlign="center">
          12:00PM,Friday, 30Mar,2020
        </H2>
      </View>
    );
  };

  const renderItemsDetail = () => {
    return (
      <OrderItemCard
        itemList={orderItems}
        deliverycharges={'10.00'}
        payableAmount={20.0}
        serviceCharges={'30.00'}
      />
    );
  };

  const renderOrderTrack = () => {
    return (
      <View style={styles.ordertrack}>
        {/* header */}
        <View style={styles.orderTrackrow}>
          <H2>Track Order</H2>
          <H2 color={AppColors.blue}>View on map</H2>
        </View>
        {/* body */}
        <View style={styles.trackStyle}>
          {OrderTrackStatus.map((item, index) => {
            if (OrderTrackStatus.length - 1 !== index) {
              return (
                <>
                  <View
                    style={
                      item.covered
                        ? styles.step
                        : item.active
                        ? styles.currentStep
                        : styles.nonactivestep
                    }></View>
                  <View
                    style={
                      !item.active
                        ? styles.trackline
                        : styles.nonActiveTrackLine
                    }></View>
                </>
              );
            } else {
              return (
                <View
                  style={
                    item.covered
                      ? styles.step
                      : item.active
                      ? styles.currentStep
                      : styles.nonactivestep
                  }></View>
              );
            }
          })}
        </View>
        <View style={styles.trackTextContainer}>
          <H2 size={3} numberOfLines={3} textStyles={styles.tractText}>
            preparing
          </H2>
          <H2 size={3} numberOfLines={3} textStyles={styles.tractText}>
            Ready to pickup
          </H2>
          <H2 size={3} numberOfLines={3} textStyles={styles.tractText}>
            on your way
          </H2>
          <H2 size={3} numberOfLines={3} textStyles={styles.tractText}>
            Delivered
          </H2>
        </View>
      </View>
    );
  };

  const renderClientDetails = () => {
    return (
      <View style={styles.clientDetail}>
        <H1 containerStyles={styles.clientdetaiHead} size={4}>
          Client details
        </H1>
        {/* client-profile */}
        <View style={styles.clientProfile}>
          {/* client-img */}
          <Image
            resizeMode="cover"
            source={{
              uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIcAWgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAgQFBgcAAQj/xAA4EAACAQMBBgMGBQEJAAAAAAABAgMABBEFBhITITFBIlFhB3GBkaGxFDJCUmLhFSMkM1NjwdHw/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAfEQEBAAICAwEBAQAAAAAAAAAAAQIRAyExQVESIhP/2gAMAwEAAhEDEQA/ALJHHR0SuRaOq1pl4EpQSiKPSlAUAEp6Uhkpzu0hloBmyelAkTl0p+y0B15UBGyx+lNJoqlZE9KbSR0whZofSmnBqYmjptwvSgltRaMopKiiqKTT0CvTgDJwB616OlZzt5tG8uoDSbXfa3jP+K3G/N/E+g70rdCTaW1jbNFu2sNFt2uLgdZiPAvmQP1fakQajq8qRcO9i3m7vGCreYPdTVZR1vTHcac8ME8DHCOcLzxyz286jtfvrq1YyMk9ldMd48Jw8bH93bn61HK2qySL3dbVf2U6pqkHhYZWSM/TyPzqW03VLHVrfj2Fwkq9wD4lPkR2rEJddvp45Iro8eN/zKw79iPI+tD0q7lttQheymkt3LYJWQj51TG32zlJ6by602kWlabM1zp8EsjFnZRk8uZ+FEda2mYSpmm/Dp9ItB3aYTy0VaEtFWg3lw/CtpZB1RCw+Ar59tIr3UdbP4Mb1zI5csOeMnrW+arCbjSryEMVMkDrkdRyNZz7IYIFe8v7kAIGCbzeeMn71PPw3x93SV0bYG+dlfUJ95j+1B98ZqzDYPTljHGt+K4H5n509k230W0nEJM2c43xC2788YqTbaewNtxyy8PGd7PKoa+ujv0p9/sXprRCNbUKcAZArNNtNDj0W9SeDAiPLB6ZrVbr2gaK8vDAnHP83BO6fjWee0q9hv1WS3kDRZHwNGO5kM9XGp72a6lJfabcxO2VgcBB+0EdKtj1Q/Y+jLp+oSNyDSqoPngf1q/PXVHIayCg4pw4oJpkl16URaEpoimgy5QWhdVxkqQM1m2yez4umc8VIZ3DRIcDdRlbOB/Ihj79w+6tKWoCwntdJ1S9gGIw0m+R2O8Mk/PNS5FuKbqGvdh7xiZby/vFVBzeaVOGPX/2KJqWxv4bZJb6LUb9LjjhgjXDCERFsc07eHxVPPq9nfPKkLR8KBd+eQIPCo5kDl15Gi63tVs/PoDONQjMTrlXRgWyehAPepfpa4M+uNjdSQLLHcXMzEHOFVlPljJ5VXta0yew32uEDCOLLxtndZmOBkeY5n5Vp1leWcdrCs4tn3owyOY1O+uOtUjbm/S63ba1SNIy2MIAB5nl8BTxytrOWEkSPs5uFt9ISHGDxGLetXokMMish0K//DMsecAH61qGm3IntkbviuieHLfJw9BPWjNQSBmmSTQ0RTTdTRlNBjKapu3LJBe2VwRhSzRuR1I6j5YNW8Gqft9HxreOPON5xg+R7VnKbhy6pvpumapZ2Mh01obqCbIdc7rHPfn15etZ/qWzt3az7jRFR13AynB+daHsPrlnJbtYX0gjlU4wT19RR9X0bRnunuhfSHljdMnIVzS/l1/zlFQitLw2UE9/dpDbQFVROrYH25cqrWo3byz5RiAckY6gGpnau/t5pI7KwctHH5fqJquToY52Rjkjqapxz3UeTL1B7BiJlArTtmbsmIITWaacuZ1q86OxjK1eIVdC2RQ6HFKGQGlb1AP0aiq1NI2oytQZwG5VXtqIuOsQ7iRT9as1nZ3F4cQxkjux5AfGhbQaStnEu+d9zz3u2fSsZXUaxm6xvWNMeC4aSIYOcgioye6nC8NjJg9RmtF1G1Dg8ulV68tF5jdX31CZdOjLDvpW7O3JxKy8x099A1O2kjuDIVJVgOY7cqs0Vv4gPKpKCwEsgyuQRR+9XZf57mlI0znMDV1sD4F91Wq32P0+906LjwBJjzWVBusB29/xptPsdeWYJtHFwg7dG/rXTjdubKdvLSfwgZp1vioiPiQSGOVGRx1DDBpzxxTKJm23pXCRqWc9ABnNWbStBLbsl70/0x/zTrSdNg0+ELGN5yPFIepqUVx2rO2tDxokcYSNQqjkABTDWLNb+1MTkCQc427Z8qd8THehyyqwIYUvJy6Zpq2n3Fq7LLGRVXvIn3yoQk58q2W4AdSjhZE/a4z9aiJtNsmfJs1z/FzUrx/Fpy/Wc2GlSyyDeGO9XDS9nshZJgViHUn9XuqYgtoID/dW0a+RYlqeKS2DkkjoT2onH9Zy5d+CBGAwAGAOg8qcoBQQMGiBsVVIG+020vk3biFG9ccx8ahDsja5OLiYDy5f9VY+IOgofGWjY0IJ8HHlSlud78tQVtc78TQ58UTFM+Y6j6fapK2IxmgJFXJFeOaGrjoK8ZqAS3WhuK5nC8zTaa7cf5VnPJ6jdX7kUAQilp0qMOpThiJdLu1X9ylH+gbNOra7iuE3oyc91dSrD3g8xRsHRNCkblXNIKbyzDzoD1p90SEnoDTNJWKKc9qBPckiZTy8J+1Kgmi4MeWXO6O/pQEBpupCS/s5RkC8gwR/IAn7g/OrRZTncGa6uoB8s+FyaDf3xtLKS4K5IxgepOK6upzyzldY2lwTl7eN2/MyAn4imuqanFptjLdzBikYzgdT6V1dWcumse4oV17QL1oN6GO3ifJG6VZiefL0xjqevpTFtvdRcL+It4d5WBSWLKMvn3IIPlXV1YvwL1pOu2+sWont95TuhmRhzXmR7uqmlXFxgGurq3PB1Ay6hm5lj/2mNUgpqNyfxH4qReL490PyGeddXU2X/9k=',
            }}
            style={styles.profileimg}
          />
          {/* client-name */}
          <View>
            <H1 color={AppColors.blue63} size={4}>
              Martin Goe
            </H1>
            <H2 color={AppColors.blue}>Client</H2>
          </View>
        </View>
        {/* Invoice-download-btn */}
        <TouchableOpacity activeOpacity={0.9} style={styles.invoicebtn}>
          <H2 size={4} color={AppColors.gray2}>
            Invoice
          </H2>

          <View style={styles.row}>
            <Ionicons
              color={AppColors.white}
              size={width(6)}
              style={styles.iconBtn}
              name="download-outline"
            />
            <H1
              fontFamily={FontFamily.SofiaSansSemiBold}
              size={4}
              color={AppColors.white}>
              Downlaod Invoice
            </H1>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderReceivedOrderBtn = () => {
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.receivedOrderbtn}>
        <H1 size={4} color={AppColors.white}>
          Received Order
        </H1>

        <View style={styles.row}>
          <H2 size={3.6} color={AppColors.gray1}>
            Scan QR
          </H2>
          <AntDesign
            style={styles.iconBtn}
            color={AppColors.white}
            size={width(7)}
            name="scan1"
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <LinearGradient
      colors={[
        AppColors.linearColorOne,
        AppColors.linearColorTwo,
        AppColors.linearColorThree,
      ]}
      style={CommonStyles.flex_1}>
      <OrderHeader
        title={selectedLanguage?.CurrentOrder_V1_Screen?.CurrentOrder_Heading}
        containerStyle={styles.headerContainerStyle}
        backView={styles.backView}
        onLeftIconPress={() => navigation.goBack()}
        footerComponent={
          <View style={styles.headerTextContainer}>
            <LinearGradient
              colors={[AppColors.blue90, AppColors.blue]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{width: 50, height: 3}}
            />
            <H2 textStyles={styles.orderFootText}> Pending </H2>
            <LinearGradient
              colors={[AppColors.blue90, AppColors.blue]}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}
              style={{width: 50, height: 3}}
            />
          </View>
        }
      />
      <ScreenWrapper
        scrollType="scroll"
        statusBarColor={AppColors.white}
        barStyle="dark-content">
        <View style={styles.container}>
          {/* order detail card */}
          {renderOrderDetailCard()}
          {/* Items-detail-card */}
          {renderItemsDetail()}
          {/* order-track */}
          {renderOrderTrack()}
          {/* client-details */}
          {renderClientDetails()}
          {/* receive-order-btn */}
          {renderReceivedOrderBtn()}
        </View>
      </ScreenWrapper>
    </LinearGradient>
  );
};

export default CurrentOrder;
