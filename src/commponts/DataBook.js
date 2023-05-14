import React, { Component } from "react";
import BookView from "./BookView";
import formatPrince from "../untils/format";
import "../App.css";

class DataBook extends Component {
  constructor() {
    super();
    this.state = {
      books: BookView,
    };
  }
  //   handelCen = (index) => {
  //     const nums = [...this.state.books];
  //     nums[index].count -= 1;
  //     this.setState({ books: nums });
  //   };
  //   handelAdd = (index) => {
  //     const nums = [...this.state.books];
  //     nums[index].count += 1;
  //     this.setState({ books: nums });
  //   };
  handelCount = (index, count) => {
    const nums = [...this.state.books];
    nums[index].count += count;
    this.setState({ books: nums });
  };
  handelDel = (index) => {
    const bookList = [...this.state.books];
    bookList.splice(index, 1);
    this.setState({ books: bookList });
  };
  printSun(params) {
    const totalPrint = this.state.books.reduce((preValue, item) => {
      return preValue + item.count * item.price;
    }, 0);
    // 0是初始化preValue的值，preValue是上一个值
    return totalPrint;
  }
  //购物车有数据显示
  redBooksList() {
    const { books } = this.state;
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>序号</th>
              <th>书籍名称</th>
              <th>出版日期</th>
              <th>价格</th>
              <th>购买数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.data}</td>
                  <td>{formatPrince(item.price)}</td>
                  <td>
                    <button
                      disabled={item.count <= 1}
                      onClick={() => this.handelCount(index, -1)}
                    >
                      -
                    </button>
                    {item.count}
                    <button onClick={() => this.handelCount(index, 1)}>
                      +
                    </button>
                  </td>
                  <td>
                    <button onClick={() => this.handelDel(index)}>删除</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>商品总价：{formatPrince(this.printSun())}</p>
      </>
    );
  }
  //购物车为空显示
  redBooksEmper() {
    return (
      <div>
        <h2>购物车为空</h2>
      </div>
    );
  }
  render() {
    const { books } = this.state;
    // let redbooks;
    // if (books.length) {
    //   redbooks = this.redBooksList();
    // } else {
    //   redbooks = this.redBooksEmper();
    // }
    return books.length ? this.redBooksList() : this.redBooksEmper();
  }
}

export default DataBook;
