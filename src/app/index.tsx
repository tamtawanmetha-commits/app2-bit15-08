import { FlatList, StyleSheet, Text, View } from 'react-native';

import Card from '@/components/card';
import products from '@/data/products.json';

const categories = [...new Set(products.map((product) => product.category))];

export default function App() {
  return (
    <View style={styles.screen}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.eyebrow}>ร้านเครื่องดื่ม</Text>
            <Text style={styles.title}>รายการสินค้า</Text>
            <Text style={styles.summary}>
              สินค้า {products.length} รายการ · {categories.length} หมวดหมู่
            </Text>
            <View style={styles.categories}>
              {categories.map((category) => (
                <View key={category} style={styles.categoryChip}>
                  <Text style={styles.categoryText}>{category}</Text>
                </View>
              ))}
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <Card
            name={item.name}
            price={item.price}
            category={item.category}
            image={item.image}
            stock={item.stock}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F6F7FB',
    flex: 1,
  },
  list: {
    paddingBottom: 24,
  },
  header: {
    paddingBottom: 20,
    paddingHorizontal: 16,
    paddingTop: 28,
  },
  eyebrow: {
    color: '#0F766E',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  title: {
    color: '#172554',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 4,
  },
  summary: {
    color: '#64748B',
    fontSize: 14,
    marginTop: 6,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  categoryChip: {
    backgroundColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
  categoryText: {
    color: '#334155',
    fontSize: 12,
    fontWeight: '600',
  },
});