import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import {H1, H2} from '~components/text/text';
import AppColors from '~utils/app-colors';
import {CommonStyles} from '~utils';

interface OrderItem {
  id: number;
  name: string;
  img: string;
  quantity: number;
  price: number;
  refno: number;
}

interface Props {
  itemList: Array<OrderItem>;
  serviceCharges: number | string;
  deliverycharges: number | string;
  payableAmount: number | string;
}

const OrderItemsDetail = ({
  itemList,
  deliverycharges,
  payableAmount,
  serviceCharges,
}: Props) => {
  const renderHeader = () => {
    return (
      <H1 containerStyles={styles.header} size={4}>
        Item Detail
      </H1>
    );
  };

  type ItemListProps = {
    item: OrderItem;
    index: number;
  };
  const renderItemlist = ({item, index}: ItemListProps) => {
    return (
      <View style={styles.itemCard}>
        {/* item-image */}
        <Image
          resizeMode="cover"
          source={{
            uri: item.img,
          }}
          style={styles.itemImg}
        />
        {/* Item-name */}
        <View>
          <H1 size={4}>{item?.name}</H1>
          <H2 size={3.7} color={AppColors.gray3}>
            {item?.refno}
          </H2>
        </View>
        {/* no-quantity */}
        <H2 color={AppColors.gray3} size={4}>
          {item?.quantity}x
        </H2>
        {/* price */}
        <H2>
          {item.price}
          <Text style={styles.currencyText}>SAR</Text>
        </H2>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* header */}
      {renderHeader()}
      {/* line divider */}
      <View style={styles.lineStyle} />
      {/* body */}
      <FlatList
        data={itemList}
        keyExtractor={item => `item-list-${item.id}`}
        scrollEnabled={false}
        renderItem={renderItemlist}
      />
      {/* footer */}
      <View style={styles.footer}>
        {/* line divider */}
        <View style={styles.lineStyle} />
        {/* total-bill */}
        <View style={styles.totalbill}>
          {/* service-charges */}
          <View>
            <H2 size={3} color={AppColors.gray3}>
              Service Charges
            </H2>
            <H1 size={5}>
              {serviceCharges}
              <Text style={styles.currencyText}>SAR</Text>
            </H1>
          </View>
          {/* line-divider */}
          <View style={styles.verticalLineStyle} />
          {/* delivery-charges */}
          <View>
            <H2 size={3} color={AppColors.gray3}>
              Delivery Charges
            </H2>
            <H1 size={5}>
              {deliverycharges}
              <Text style={styles.currencyText}>SAR</Text>
            </H1>
          </View>
          {/* line-divider */}
          <View style={styles.verticalLineStyle} />
          {/* payable-amount */}
          <View>
            <H2 size={3} color={AppColors.gray3}>
              Payable Amount
            </H2>
            <H1 size={5}>
              {payableAmount}
              <Text style={styles.currencyText}>SAR</Text>
            </H1>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderItemsDetail;
