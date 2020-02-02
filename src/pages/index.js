import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => <div style={{ fontSize: '72px'}}>
    <Header headerText="Hello  jose" />
  <Link to="/contact">Contact</Link>
    <p>paragraph</p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Dog_coat_variation.png/220px-Dog_coat_variation.png" alt="dog"/>
</div>
