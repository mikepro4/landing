'use strict';
var React = require('react');
var Icons = require('../components/Icons.jsx');
var InputError = require('../components/InputError.jsx');
var classnames = require('classnames');
var _ = require('underscore');

var Input = React.createClass({

  getInitialState: function() {
    var valid = (this.props.isValid && this.props.isValid()) || true;

    return {
      valid: valid,
      empty: _.isEmpty(this.props.value),
      focus: false,
      value: null,
      iconsVisible: !this.props.validator,
      errorMessage: this.props.emptyMessage,
      type: this.props.type,
      textarea: this.props.textarea
    };
  },

  handleChange: function(event) {
    this.setState({
      value: event.target.value,
      empty: _.isEmpty(event.target.value)
    });

    // call input's validation method
    if(this.props.validate) {
      this.validateInput(event.target.value);
    }

    // call onChange method on the parent component for updating it's state
    if(this.props.onChange) {
      this.props.onChange(event);
    }
  },

  validateInput: function(value) {
    // trigger custom validation method in the parent component
    if(this.props.validate && this.props.validate(value)){
      this.setState({
        valid: true,
        errorVisible: false
      });
    } else {
      this.setState({
        valid: false,
        errorMessage: !_.isEmpty(value.trim()) ? this.props.errorMessage : this.props.emptyMessage
      });  
    }

  },

  componentWillReceiveProps: function(newProps) {    
    // perform update only when new value exists and not empty  
    if(newProps.value) {
      if(!_.isUndefined(newProps.value) && newProps.value.length > 0) {
        if(this.props.validate) {
          this.validateInput(newProps.value);
        }
        this.setState({
          value: newProps.value,
          empty: _.isEmpty(newProps.value)
        });
      }   
    }
  },

  isValid: function() {
    if(_.isEmpty(this.state.value) || !this.props.validate(this.state.value)) {
      this.setState({
        valid: false,
        errorVisible: true
      });
    } else {
      this.setState({
        valid: true,
        errorVisible: false
      });
    }
  },

  getValidStatus: function() {
    return this.state.valid;
  },

  handleFocus: function() {
    this.setState({
      focus: true,
    });
  },

  handleBlur: function() {
    this.setState({
      focus: false,
      errorVisible: !this.state.valid,
    });
  },

  mouseEnterError: function() {
    this.setState({
      errorVisible: true
    });
  },

  hideError: function () {
    this.setState({
      errorVisible: false
    });
  },

  focus: function() {
    this.refs.input.getDOMNode().focus();
  },
  
  select: function() {
    this.refs.input.getDOMNode().select();
  },

  render: function() {
    var input;
    if(!this.state.textarea) {
      input = 
        <input 
          {...this.props}
          placeholder={this.props.placeholder} 
          className="input" 
          ref="input"
          id={this.props.text}
          defaultValue={this.props.defaultValue} 
          value={this.state.value} 
          onChange={this.handleChange} 
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          autoComplete="off"
        />
    } else {
       input = 
        <textarea 
          {...this.props}
          placeholder={this.props.placeholder} 
          className="input textarea" 
          ref="input"
          id={this.props.text}
          defaultValue={this.props.defaultValue} 
          value={this.state.value} 
          onChange={this.handleChange} 
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          rows="5" 
          cols="50"
        />
    }
    return (
      <div className={classnames({
        'input_group':     true,
        'input_valid':     this.state.valid,
        'input_error':     !this.state.valid,
        'input_empty':     this.state.empty,
        'input_hasValue':  !this.state.empty,
        'input_focused':   this.state.focus,
        'input_unfocused': !this.state.focus,
        'textarea':        this.state.textarea
      })}>

        <label className="input_label" htmlFor={this.props.text}>
          <span className="label_text">{this.props.text}</span>
        </label>

        {input}

        <InputError 
          visible={this.state.errorVisible} 
          errorMessage={this.state.errorMessage} 
        />

        <div className="validationIcons">
          <i className="input_error_icon" onMouseEnter={this.mouseEnterError}> <Icons type="circle_error"/> </i>
          <i className="input_valid_icon"> <Icons type="circle_tick"/> </i>
        </div>


      </div>
    );
  }
});

module.exports = Input;
