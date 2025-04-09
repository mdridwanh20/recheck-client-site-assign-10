import React from 'react'
import Hero_Section from '../Components/Home/Hero_Section'
import About from '../Components/Home/About'
import Popular_item from '../Components/Home/Popular_item'
import Category from '../Components/Home/Category'
import Feedback from '../Components/Home/Feedback'

export default function Home() {
  return (
    <div>
      <Hero_Section></Hero_Section>
      <About></About>
      <Popular_item></Popular_item>
      <Category></Category>
      <Feedback></Feedback>
    </div>

  )
}
