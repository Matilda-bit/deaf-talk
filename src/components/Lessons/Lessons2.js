import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import cartImage1 from "../../components/Images/n1.png";
import cartImage2 from "../../components/Images/n2.png";
import cartImage3 from "../../components/Images/n3.png";
import cartImage4 from "../../components/Images/n4.png";
import cartImage5 from "../../components/Images/n5.png";
import cartImage6 from "../../components/Images/n6.png";
import cartImage7 from "../../components/Images/n7.png";
import cartImage8 from "../../components/Images/n8.png";
import cartImage9 from "../../components/Images/n9.png";
import cartImage10 from "../../components/Images/n10.png";



/*author Warda, first lesson
Numbers lessson
*/

class Lessons2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    value: '',
    image1:false,image2:false,image3:false,image4:false,image5:false,
    image6:false,image7:false,image8:false,image9:false,image10:false,

  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.value === '1'){
      this.setState({
          image1:!this.state.image1,
          image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false

      })
    }
    if(this.state.value === '2'){
      this.setState({
          image2:!this.state.image2,
          image1:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === '3'){
      this.setState({
          image3:!this.state.image3,
          image1:false,image2:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === '4'){
      this.setState({
          image4:!this.state.image4,
          image1:false,image2:false,image3:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === '5'){
      this.setState({
          image5:!this.state.image5,
          image1:false,image2:false,image3:false,image4:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === '6'){
      this.setState({
          image6:!this.state.image6,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === '7'){
      this.setState({
          image7:!this.state.image7,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === '8'){
      this.setState({
          image8:!this.state.image8,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === '9'){
      this.setState({
          image9:!this.state.image9,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === '10'){
      this.setState({
          image10:!this.state.image10,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }


    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        <h1/>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => {
            this.props.history.push("/PickLesson");
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Back to Lessons
        </Button>
        <h2/>
          Enter a number:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <h3/>
        </label>
        <input type="submit" value="Submit" />
        <h4/>
        <h5/>
        {this.state.image1?
        <img src={cartImage1} alt={"image1"}/>
        :null}
        {this.state.image2?
        <img src={cartImage2} alt={"image2"}/>
        :null}
        {this.state.image3?
        <img src={cartImage3} alt={"image3"}/>
        :null}
        {this.state.image4?
        <img src={cartImage4} alt={"image4"}/>
        :null}
        {this.state.image5?
        <img src={cartImage5} alt={"image5"}/>
        :null}
        {this.state.image6?
        <img src={cartImage6} alt={"image6"}/>
        :null}
        {this.state.image7?
        <img src={cartImage7} alt={"image7"}/>
        :null}
        {this.state.image8?
        <img src={cartImage8} alt={"image8"}/>
        :null}
        {this.state.image9?
        <img src={cartImage9} alt={"image9"}/>
        :null}
        {this.state.image10?
        <img src={cartImage10} alt={"image10"}/>
        :null}

      </form>
    );
  }
}

const LS = Lessons2;
export default LS;
