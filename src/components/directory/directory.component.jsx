import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { sections } from "../../constants/directory.data";
import "./directory.styles.scss"

class Directory extends React.Component {
  constructor(props) {
    super();
    this.state = {
      sections
    };
  }

  render() {
      const {sections} = this.state
    return (
        <div className="directory-menu">

        {
            sections.map(({title,imageUrl,id, size}) => (
                <MenuItem key={id} title={title} subTitle="SHOP NOW!" imageUrl={imageUrl} size={size} />

            ))
        }
        </div>
    );
  }
}

export default Directory;
