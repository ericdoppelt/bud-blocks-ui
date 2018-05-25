import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import SULI from './SULI';
import Dashboard from './Dashboard';
import NoteToggle from './NoteToggle';
import { Switch, Route, Link } from 'react-router-dom';

const styles = {
  StretchButton: {
    width: '100%',
    height: '100px',
    fontSize: '36px'
  }
}

const Directory = () => (
    <div>
      <Button style={styles.StretchButton} onClick={this.signUp} component={Link} to='/login'>Sign Up</Button>
      <Button style={styles.StretchButton} onClick={this.dashboard} component={Link} to='/dashboard'>Dashboard</Button>
      <Button style={styles.StretchButton} onClick={this.noteToggle} component={Link} to='/sendnote'>Note Toggle</Button>
    </div>
  )

export default Directory;
