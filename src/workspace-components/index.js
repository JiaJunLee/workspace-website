import '../style/font.scss'

import './workspace-overview/workspace-overview.scss'
import './workspace-imagebox/workspace-imagebox.scss'
import './workspace-dashboard-tip/workspace-dashboard-tip.scss'
import './workspace-project-card/workspace-project-card.scss'
import './workspace-progress-bar/workspace-progress-bar.scss'
import './workspace-dialog/create-project-dialog/create-project-dialog.scss'
import './workspace-task-list/workspace-task-list.scss'
import './workspace-task-list/workspace-task-item/workspace-task-item.scss'
import './workspace-task-list/workspace-task-item-tip/workspace-task-item-tip.scss'
import './workspace-dialog/create-task-dialog/create-task-dialog.scss'

import OverviewContainer from './workspace-overview/container/workspace-overview-container'
import Overview from './workspace-overview/workspace-overview'
import ImageBox from './workspace-imagebox/workspace-imagebox'
import DashboardTip from './workspace-dashboard-tip/workspace-dashboard-tip'
import ProjectCard from './workspace-project-card/workspace-project-card'
import ProjectCardContainer from './workspace-project-card/container/workspace-project-card-container'
import ProcessBar from './workspace-progress-bar/workspace-progress-bar'
import SearchBox from './workspace-search-box/workspace-search-box'
import CreateProjectDialog from './workspace-dialog/create-project-dialog/index'
import TaskList from './workspace-task-list/workspace-task-list'
import TaskListItem from './workspace-task-list/workspace-task-item/workspace-task-item'
import TaskListItemTip from './workspace-task-list/workspace-task-item-tip/workspace-task-item-tip'
import CreateTaskDialog from './workspace-dialog/create-task-dialog/index'

const WorkspaceComponents = [
  OverviewContainer,
  Overview,
  ImageBox,
  DashboardTip,
  ProjectCard,
  ProjectCardContainer,
  ProcessBar,
  SearchBox,
  TaskList,
  TaskListItem,
  TaskListItemTip
]

const install = function (Vue) {
  WorkspaceComponents.map(component => Vue.component(component.name, component))
  Vue.prototype.$createProjectDialog = CreateProjectDialog
  Vue.prototype.$createTaskDialog = CreateTaskDialog
}

if (typeof window !== 'undefined' && window.Vue) { install(window.Vue) }

const WorkspaceUI = {
  install,
  ...WorkspaceComponents
}

export default WorkspaceUI
