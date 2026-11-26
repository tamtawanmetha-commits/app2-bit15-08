import { Image, StyleSheet, Text, View } from 'react-native';

type CardProps = {
  name: string;
  price: number;
  category: string;
  image: string;
  stock: number;
};

export default function Card({ name, price, category, image, stock }: CardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} accessibilityLabel={name} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.price}>฿{price.toLocaleString()}</Text>
        <Text style={styles.stock}>คงเหลือ {stock.toLocaleString()} ชิ้น</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    flexDirection: 'row',
    gap: 14,
    marginBottom: 12,
    marginHorizontal: 16,
    padding: 12,
    shadowColor: '#172554',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
  },
  image: {
    borderRadius: 12,
    height: 88,
    width: 88,
  },
  details: {
    flex: 1,
    gap: 6,
  },
  name: {
    color: '#172554',
    fontSize: 16,
    fontWeight: '700',
  },
  category: {
    alignSelf: 'flex-start',
    backgroundColor: '#EEF2FF',
    borderRadius: 10,
    color: '#4F46E5',
    fontSize: 12,
    overflow: 'hidden',
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  price: {
    color: '#0F766E',
    fontSize: 15,
    fontWeight: '700',
  },
  stock: {
    color: '#64748B',
    fontSize: 13,
  }
});