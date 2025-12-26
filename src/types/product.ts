export interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  specifications: { label: string; value: string }[];
  reviews: Review[];
  inStock: boolean;
  warranty: string;
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
    description: 'Профессиональный мангал-гриль из нержавеющей стали премиум-класса. Идеально подходит для приготовления мяса, рыбы и овощей на открытом огне. Прочная конструкция обеспечивает долгий срок службы.',
    features: ['Нержавеющая сталь', 'Регулировка высоты', 'Решетка в комплекте'],
    specifications: [
      { label: 'Материал', value: 'Нержавеющая сталь AISI 304' },
      { label: 'Размеры', value: '80x40x90 см' },
      { label: 'Вес', value: '25 кг' },
      { label: 'Толщина стали', value: '3 мм' },
      { label: 'Количество шампуров', value: '10 шт' }
    ],
    reviews: [
      { id: 1, author: 'Алексей М.', rating: 5, date: '2024-11-15', comment: 'Отличный мангал! Крепкий, удобный, легко чистится. Семья довольна.' },
      { id: 2, author: 'Дмитрий К.', rating: 5, date: '2024-10-28', comment: 'Качество на высоте, сталь толстая, не прогорает. Рекомендую!' },
      { id: 3, author: 'Сергей В.', rating: 4, date: '2024-10-10', comment: 'Хороший мангал, но тяжеловат. В остальном всё отлично.' }
    ],
    inStock: true,
    warranty: '2 года'
  },
  {
    id: 2,
    name: 'Дымогенератор компакт',
    price: 8500,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/3db84a65-c933-4a08-aae3-9cb0e8949bb4.jpg',
    category: 'Дымогенераторы',
    description: 'Компактный дымогенератор для холодного копчения в домашних условиях. Легко подключается к любой коптильне. Работает на щепе и опилках.',
    features: ['Холодное копчение', 'Регулировка дыма', 'Простота использования'],
    specifications: [
      { label: 'Материал', value: 'Нержавеющая сталь' },
      { label: 'Объем камеры', value: '1.5 л' },
      { label: 'Время работы', value: 'До 8 часов' },
      { label: 'Диаметр трубы', value: '25 мм' },
      { label: 'Вес', value: '2 кг' }
    ],
    reviews: [
      { id: 4, author: 'Михаил Г.', rating: 5, date: '2024-11-20', comment: 'Супер! Коптил сало и рыбу - получилось шикарно!' },
      { id: 5, author: 'Игорь Т.', rating: 5, date: '2024-11-05', comment: 'Работает как часы. Дым густой, равномерный. Доволен покупкой.' }
    ],
    inStock: true,
    warranty: '1 год'
  },
  {
    id: 3,
    name: 'Коптильня профессиональная',
    price: 22000,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/6dfeef68-9f46-4bd6-8e7b-e36451281d84.jpg',
    category: 'Коптильни',
    description: 'Вместительная коптильня для горячего и холодного копчения. Профессиональное оборудование для больших объемов. Встроенный термометр и система гидрозатвора.',
    features: ['Большой объем', 'Термометр', '2 яруса'],
    specifications: [
      { label: 'Материал', value: 'Нержавеющая сталь 2 мм' },
      { label: 'Размеры', value: '60x40x80 см' },
      { label: 'Объем', value: '100 л' },
      { label: 'Количество ярусов', value: '2 шт' },
      { label: 'Вес', value: '18 кг' }
    ],
    reviews: [
      { id: 6, author: 'Владимир П.', rating: 5, date: '2024-11-12', comment: 'Коптильня огонь! Вмещает много продуктов, качество супер!' },
      { id: 7, author: 'Олег С.', rating: 4, date: '2024-10-22', comment: 'Хорошая коптильня, но цена кусается. Качество соответствует.' }
    ],
    inStock: true,
    warranty: '3 года'
  },
  {
    id: 4,
    name: 'Мангал складной турист',
    price: 3200,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/1be17ce2-be65-443a-9fd8-77484c983597.jpg',
    category: 'Мангалы',
    description: 'Компактный складной мангал для путешествий и пикников. Легко собирается за минуту. Идеален для походов и выездов на природу.',
    features: ['Складной', 'Легкий', 'Чехол в комплекте'],
    specifications: [
      { label: 'Материал', value: 'Сталь оцинкованная' },
      { label: 'Размеры в сложенном виде', value: '50x20x5 см' },
      { label: 'Вес', value: '3.5 кг' },
      { label: 'Количество шампуров', value: '6 шт' },
      { label: 'Толщина стали', value: '1.5 мм' }
    ],
    reviews: [
      { id: 8, author: 'Евгений Л.', rating: 5, date: '2024-11-25', comment: 'Супер мангал для походов! Легкий, компактный, быстро складывается.' },
      { id: 9, author: 'Павел Н.', rating: 5, date: '2024-11-08', comment: 'Брал на рыбалку - идеально! Места мало занимает, работает отлично.' }
    ],
    inStock: true,
    warranty: '1 год'
  },
  {
    id: 5,
    name: 'Дымогенератор усиленный',
    price: 12500,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/3db84a65-c933-4a08-aae3-9cb0e8949bb4.jpg',
    category: 'Дымогенераторы',
    description: 'Мощный дымогенератор с расширенным функционалом для профессионального использования. Автоматическая система контроля температуры и подачи дыма.',
    features: ['Автоматика', 'Большая камера', 'Датчик температуры'],
    specifications: [
      { label: 'Материал', value: 'Нержавеющая сталь' },
      { label: 'Объем камеры', value: '3 л' },
      { label: 'Время работы', value: 'До 12 часов' },
      { label: 'Диаметр трубы', value: '32 мм' },
      { label: 'Мощность компрессора', value: '15 Вт' }
    ],
    reviews: [
      { id: 10, author: 'Андрей Ж.', rating: 5, date: '2024-11-18', comment: 'Профессиональная штука! Автоматика работает чётко.' },
      { id: 11, author: 'Николай Р.', rating: 5, date: '2024-10-30', comment: 'Лучший дымогенератор из всех что пробовал. Стоит своих денег!' }
    ],
    inStock: true,
    warranty: '2 года'
  },
  {
    id: 6,
    name: 'Коптильня домашняя',
    price: 9800,
    image: 'https://cdn.poehali.dev/projects/1c1bf040-b240-4045-ae3c-d5a701d7394c/files/6dfeef68-9f46-4bd6-8e7b-e36451281d84.jpg',
    category: 'Коптильни',
    description: 'Компактная коптильня для дачи и частного использования. Идеальна для начинающих. Простая в эксплуатации и обслуживании.',
    features: ['Компактность', 'Простота', 'Надежность'],
    specifications: [
      { label: 'Материал', value: 'Нержавеющая сталь 1.5 мм' },
      { label: 'Размеры', value: '45x30x50 см' },
      { label: 'Объем', value: '40 л' },
      { label: 'Количество ярусов', value: '1 шт' },
      { label: 'Вес', value: '8 кг' }
    ],
    reviews: [
      { id: 12, author: 'Максим Б.', rating: 5, date: '2024-11-22', comment: 'Отличная коптильня для дачи! Компактная и удобная.' },
      { id: 13, author: 'Артём З.', rating: 4, date: '2024-11-01', comment: 'Хорошая коптильня за свои деньги. Для домашнего использования самое то.' }
    ],
    inStock: false,
    warranty: '1 год'
  }
];