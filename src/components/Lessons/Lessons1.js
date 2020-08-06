import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import cartImage1 from "../../components/Images/1.png";
import cartImage2 from "../../components/Images/2.png";
import cartImage3 from "../../components/Images/3.png";
import cartImage4 from "../../components/Images/4.png";
import cartImage5 from "../../components/Images/5.png";
import cartImage6 from "../../components/Images/6.png";
import cartImage7 from "../../components/Images/7.png";
import cartImage8 from "../../components/Images/8.png";
import cartImage9 from "../../components/Images/9.png";
import cartImage10 from "../../components/Images/10.png";
import cartImage11 from "../../components/Images/11.png";
import cartImage12 from "../../components/Images/12.png";
import cartImage13 from "../../components/Images/13.png";
import cartImage14 from "../../components/Images/14.png";
import cartImage15 from "../../components/Images/15.png";
import cartImage16 from "../../components/Images/16.png";
import cartImage17 from "../../components/Images/17.png";
import cartImage18 from "../../components/Images/18.png";
import cartImage19 from "../../components/Images/19.png";
import cartImage20 from "../../components/Images/20.png";
import cartImage21 from "../../components/Images/21.png";
import cartImage22 from "../../components/Images/22.png";
import cartImage23 from "../../components/Images/23.png";
import cartImage24 from "../../components/Images/24.png";
import cartImage25 from "../../components/Images/25.png";
import cartImage26 from "../../components/Images/26.png";
import cartImage27 from "../../components/Images/27.png";


/*author Warda, first lesson*/

class Lessons1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    value: '',
    image1:false,image2:false,image3:false,image4:false,image5:false,
    image6:false,image7:false,image8:false,image9:false,image10:false,
    image11:false,image12:false,image13:false,image14:false,image15:false,
    image16:false,image17:false,image18:false,image19:false,image20:false,
    image21:false,image22:false,image23:false,image24:false,image25:false,
    image26:false,image27:false
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.value === 'א'){
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
    if(this.state.value === 'ב'){
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
    if(this.state.value === 'ג'){
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
    if(this.state.value === 'ד'){
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
    if(this.state.value === 'ה'){
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
    if(this.state.value === 'ו'){
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
    if(this.state.value === 'ז'){
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
    if(this.state.value === 'ח'){
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
    if(this.state.value === 'ט'){
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
    if(this.state.value === 'י'){
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
    if(this.state.value === 'כ'){
      this.setState({
          image11:!this.state.image11,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'ך'){
      this.setState({
          image12:!this.state.image12,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'ל'){
      this.setState({
          image13:!this.state.image13,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'מ'){
      this.setState({
          image14:!this.state.image14,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'ם'){
      this.setState({
          image15:!this.state.image15,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'נ'){
      this.setState({
          image16:!this.state.image16,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'ן'){
      this.setState({
          image17:!this.state.image17,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'ס'){
      this.setState({
          image18:!this.state.image18,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'ע'){
      this.setState({
          image19:!this.state.image19,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'פ'){
      this.setState({
          image20:!this.state.image20,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'ף'){
      this.setState({
          image21:!this.state.image21,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image22:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'צ'){
      this.setState({
          image22:!this.state.image22,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image23:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'ץ'){
      this.setState({
          image23:!this.state.image23,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image24:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'ק'){
      this.setState({
          image24:!this.state.image24,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image25:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'ר'){
      this.setState({
          image25:!this.state.image25,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,
          image26:false,image27:false
      })
    }
    if(this.state.value === 'ש'){
      this.setState({
          image26:!this.state.image26,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image27:false
      })
    }
    if(this.state.value === 'ת'){
      this.setState({
          imag27:!this.state.image27,
          image1:false,image2:false,image3:false,image4:false,image5:false,
          image6:false,image7:false,image8:false,image9:false,image10:false,
          image11:false,image12:false,image13:false,image14:false,image15:false,
          image16:false,image17:false,image18:false,image19:false,image20:false,
          image21:false,image22:false,image23:false,image24:false,image25:false,
          image26:false
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
          Enter a Text:
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
        {this.state.image11?
        <img src={cartImage11} alt={"image11"}/>
        :null}
        {this.state.image12?
        <img src={cartImage12} alt={"image12"}/>
        :null}
        {this.state.image13?
        <img src={cartImage13} alt={"image13"}/>
        :null}
        {this.state.image14?
        <img src={cartImage14} alt={"image14"}/>
        :null}
        {this.state.image15?
        <img src={cartImage15} alt={"image15"}/>
        :null}
        {this.state.image16?
        <img src={cartImage16} alt={"image16"}/>
        :null}
        {this.state.image17?
        <img src={cartImage17} alt={"image17"}/>
        :null}
        {this.state.image18?
        <img src={cartImage18} alt={"image18"}/>
        :null}
        {this.state.image19?
        <img src={cartImage19} alt={"image19"}/>
        :null}
        {this.state.image20?
        <img src={cartImage20} alt={"image20"}/>
        :null}
        {this.state.image21?
        <img src={cartImage21} alt={"image21"}/>
        :null}
        {this.state.image22?
        <img src={cartImage22} alt={"image22"}/>
        :null}
        {this.state.image23?
        <img src={cartImage23} alt={"image23"}/>
        :null}
        {this.state.image24?
        <img src={cartImage24} alt={"image24"}/>
        :null}
        {this.state.image25?
        <img src={cartImage25} alt={"image25"}/>
        :null}
        {this.state.image26?
        <img src={cartImage26} alt={"image26"}/>
        :null}
        {this.state.image27?
        <img src={cartImage27} alt={"image27"}/>
        :null}
      </form>
    );
  }
}

const LS = Lessons1;
export default LS;
