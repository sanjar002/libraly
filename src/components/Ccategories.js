import React, { Component } from "react";

export class Ccategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: "all",
          name: "Всё",
        },
        {
          key: "children",
          name: "Для детей",
        },
        {
          key: "adults",
          name: "Для взрослых",
        },
        {
          key: "it",
          name: "Прогроммирования",
        },
        {
          key: "novel",
          name: "Романные",
        },
      ],
    };
  }

  render() {
    return (
      <div className="categories">
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
        ;
      </div>
    );
  }
}

export default Ccategories;
