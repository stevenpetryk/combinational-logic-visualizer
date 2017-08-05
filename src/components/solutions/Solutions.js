import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Introduction from './Introduction'
import ProductSumsContainer from './ProductSumsContainer'

import './Solutions.scss'
import './SolutionsHeader.scss'

export default () => (
  <div className='solutions'>
    <Tabs>
      <TabList>
        <Tab>Introduction + Examples</Tab>
        <Tab>Canonical Forms</Tab>
        <Tab>Draw Karnaugh Map</Tab>
        <Tab>Identify Minimal Form</Tab>
        <Tab>Draw Gate Diagram</Tab>
      </TabList>

      <TabPanel>
        <Introduction />
      </TabPanel>

      <TabPanel>
        <ProductSumsContainer />
      </TabPanel>

      <TabPanel />
      <TabPanel />
      <TabPanel />
    </Tabs>
  </div>
)
