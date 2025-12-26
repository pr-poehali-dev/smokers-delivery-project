export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Мангал-гриль премиум',
    price: 15900,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/1be17ce2-be65-443a-9fd8-77484c983597.jpg',
    category: 'Мангалы',
    description: 'Профессиональный мангал-гриль из нержавеющей стали',
    features: ['Нержавеющая сталь', 'Регулировка высоты', 'Решетка в комплекте']
  },
  {
    id: 2,
    name: 'Дымогенератор компакт',
    price: 8500,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/3db84a65-c933-4a08-aae3-9cb0e8949bb4.jpg',
    category: 'Дымогенераторы',
    description: 'Компактный дымогенератор для холодного копчения',
    features: ['Холодное копчение', 'Регулировка дыма', 'Простота использования']
  },
  {
    id: 3,
    name: 'Коптильня профессиональная',
    price: 22000,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/6dfeef68-9f46-4bd6-8e7b-e36451281d84.jpg',
    category: 'Коптильни',
    description: 'Вместительная коптильня для горячего и холодного копчения',
    features: ['Большой объем', 'Термометр', '2 яруса']
  },
  {
    id: 4,
    name: 'Мангал складной турист',
    price: 3200,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/1be17ce2-be65-443a-9fd8-77484c983597.jpg',
    category: 'Мангалы',
    description: 'Компактный складной мангал для путешествий',
    features: ['Складной', 'Легкий', 'Чехол в комплекте']
  },
  {
    id: 5,
    name: 'Дымогенератор усиленный',
    price: 12500,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/3db84a65-c933-4a08-aae3-9cb0e8949bb4.jpg',
    category: 'Дымогенераторы',
    description: 'Мощный дымогенератор с расширенным функционалом',
    features: ['Автоматика', 'Большая камера', 'Датчик температуры']
  },
  {
    id: 6,
    name: 'Коптильня домашняя',
    price: 9800,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/6dfeef68-9f46-4bd6-8e7b-e36451281d84.jpg',
    category: 'Коптильни',
    description: 'Компактная коптильня для дачи',
    features: ['Компактность', 'Простота', 'Надежность']
  }
];
