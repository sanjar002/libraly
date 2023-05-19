import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/items";
import Ccategories from "./components/Ccategories";
import ShowFullItem from "./components/ShowFullItem";

import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          img: "https://cdn.eksmo.ru/v2/ITD000000001120974/COVER/cover1__w220.jpg",
          title: "Для детей",
          desc: "Приключения Гекльберри Финна",
          category: "children",
          price: "31.99",
        },
        {
          id: 2,
          img: "https://basket-04.wb.ru/vol540/part54081/54081129/images/big/1.jpg",
          title: "Для взрослых",
          desc: "Клуб убийств по четвергам",
          category: "adults",
          price: "149.00",
        },
        {
          id: 3,
          img: "https://static.tildacdn.com/tild6639-3133-4330-b530-386334303535/m_Book_Mockup___2.png",
          title: "Для взрослых",
          desc: "Super star",
          category: "adults",
          price: "549.99",
        },
        {
          id: 4,
          img: "https://s1.livelib.ru/boocover/1001211005/140/24fd/Dzhonatan_Straud__Shepchuschij_cherep.jpg",
          title: "Для взрослых",
          desc: "Шипчуший череп",
          category: "adults",
          price: "25.99",
        },
        {
          id: 5,
          img: "https://basket-04.wb.ru/vol527/part52710/52710964/images/big/5.jpg",
          title: "Для детей",
          desc: "Волшебный картон",
          category: "children",
          price: "49.99",
        },
        {
          id: 6,
          img: "https://bukva.info/blog/wp-content/uploads/2019/04/knigi_dlya_samorazvitiya_01.jpg",
          title: "Для взрослых",
          desc: "",
          category: "adults",
          price: "351.41",
        },
        {
          id: 7,
          img: "https://sun9-55.userapi.com/impg/pKAHXWVp_vqjkeaRtcLq2_bELNjZCl5tdMNiVw/9DZK37ggAJY.jpg?size=900x1200&quality=95&sign=19d7675e1bb6c59228a3125839c1e026&c_uniq_tag=UyP8p0kCyF66MF6OLfygS23KT3nZTCJlyPFMF-yBImg&type=album",
          title: "Программирования",
          desc: "Lorem ipsum dolor sit amet, consecttetur adipisicing",
          category: "it",
          price: "121.99",
        },
        {
          id: 8,
          img: "https://habrastorage.org/webt/yr/k2/nk/yrk2nk3rzy8m2f5uvms6yr5bgfu.jpeg",
          title: "Программирования",
          desc: "Lorem ipsum dolor sit amet, consecttetur adipisicing",
          category: "it",
          price: "31.40",
        },
        {
          id: 9,
          img: "https://www.mann-ivanov-ferber.ru/assets/images/covers/00/28700/1.00x-thumb.png",
          title: "Для детей",
          desc: "Lorem ipsum dolor sit amet, consecttetur adipisicing",
          category: "children",
          price: "87.88",
        },
        {
          id: 10,
          img: "https://litmarket.ru/storage/books/75073_1682959042_644feac2a2a36.jpg",
          title: "Роман",
          desc: "Lorem ipsum dolor sit amet, consecttetur adipisicing",
          category: "novel",
          price: "456.22",
        },
        {
          id: 11,
          img: "https://storage.bookriver.ru/storage/8K/EU/1671027995-22012-alerniya-kniga-3-orden-usov-serg-boevoe-fentezi.jpg",
          title: "Роман",
          desc: "Lorem ipsum dolor sit amet, consecttetur adipisicing",
          category: "novel",
          price: "333.09",
        },
        {
          id: 12,
          img: "https://monster-book.com/sites/default/files/styles/sc290x400/public/books/chistyy-kod.png?itok=2pHfiq3N",
          title: "Чистый код",
          desc: "Lorem ipsum dolor sit amet, consecttetur adipisicing",
          category: "it",
          price: "120.59",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  };

  /* ЭТО ВСЕ КОМПОНЕНТЫ НА КОТОРЫУ ДЕЛЯТСЯ */
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Ccategories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onShowItem={this.onShowItem}
            onAdd={this.addToOrder}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  /* Сплываюшая окна ЛОГИКА */
  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  /* ФИЛТРАЦИЯ НА КАТЕГОРИИ БОЛУП ЧЫККАН */
  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    console.log(category);
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  /* УДАЛИТТИН ЛОГИКАСЫ */
  deleteOrder(id) {
    console.log(id);
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  /*ПОВТОРНАЯ КАРЗИНА */
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    
    /*ЕСЛИ КАРЗИНА ТУУРА БОЛСО УШУНУ ЧЫГАР */
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] }, () => {
        // console.log(this.state.orders);
      });
  }
}

export default App;
