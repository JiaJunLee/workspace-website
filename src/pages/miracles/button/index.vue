<template>
  <div>
    <h1>Miracles UI</h1>
    <br/>
    <h3>Miracles Button</h3>
    <miracles-button>Default Button</miracles-button>
    <miracles-button type="activity">Activity Button</miracles-button>
    <miracles-button type="primary">Primary Button</miracles-button>
    <miracles-button type="warning">Warning Button</miracles-button>
    <miracles-button type="success">Success Button</miracles-button>
    <miracles-button type="error">Error Button</miracles-button>
    <h3>Small Miracles Button</h3>
    <miracles-button text_size="small">Default Button</miracles-button>
    <miracles-button text_size="small" type="activity">Activity Button</miracles-button>
    <miracles-button text_size="small" type="primary">Primary Button</miracles-button>
    <miracles-button text_size="small" type="warning">Warning Button</miracles-button>
    <miracles-button text_size="small" type="success">Success Button</miracles-button>
    <miracles-button text_size="small" type="error">Error Button</miracles-button>
    <h3>Large Miracles Button</h3>
    <miracles-button text_size="large">Default Button</miracles-button>
    <miracles-button text_size="large" type="activity">Activity Button</miracles-button>
    <miracles-button text_size="large" type="primary">Primary Button</miracles-button>
    <miracles-button text_size="large" type="warning">Warning Button</miracles-button>
    <miracles-button text_size="large" type="success">Success Button</miracles-button>
    <miracles-button text_size="large" type="error">Error Button</miracles-button>
    <h3>Miracles Loading Button</h3>
    <miracles-button loading>Default Button</miracles-button>
    <miracles-button loading type="activity">Activity Button</miracles-button>
    <miracles-button loading type="primary">Primary Button</miracles-button>
    <miracles-button loading type="warning">Warning Button</miracles-button>
    <miracles-button loading type="success">Success Button</miracles-button>
    <miracles-button loading type="error">Error Button</miracles-button>
    <h3>Miracles Icon Button</h3>
    <miracles-button icon_size="small" icon="refresh">Default Button</miracles-button>
    <miracles-button icon_size="small" icon="place" type="activity">Activity Button</miracles-button>
    <miracles-button icon="cancel" type="primary">Primary Button</miracles-button>
    <miracles-button icon="error" type="warning">Warning Button</miracles-button>
    <miracles-button icon_size="large" icon="check_circle" type="success">Success Button</miracles-button>
    <miracles-button icon_size="large" icon="not_interested" type="error">Error Button</miracles-button>
    <h3>Miracles Disable Button</h3>
    <miracles-button disable type="activity">Activity Button</miracles-button>
    <miracles-button disable loading type="primary">Primary Button</miracles-button>
    <miracles-button disable icon="error" type="warning">Warning Button</miracles-button>
    <br/>
    <h3>Miracles Button Group</h3>
    <miracles-button-group margin="small" border>
      <miracles-button type="default">Cancel</miracles-button>
      <miracles-button type="activity">Accept</miracles-button>
      <miracles-button type="success">Success</miracles-button>
    </miracles-button-group>
    <br/><br/>
    <miracles-button-group border>
      <miracles-button type="default">Cancel</miracles-button>
      <miracles-button type="activity">Accept</miracles-button>
      <miracles-button type="success">Success</miracles-button>
    </miracles-button-group>
    <br/><br/>
    <miracles-button-group margin="large" border>
      <miracles-button type="default">Cancel</miracles-button>
      <miracles-button type="activity">Accept</miracles-button>
      <miracles-button type="success">Success</miracles-button>
    </miracles-button-group>
    <br/><br/>
    <miracles-button-group margin="small">
      <miracles-button type="default">Cancel</miracles-button>
      <miracles-button type="activity">Accept</miracles-button>
      <miracles-button type="success">Success</miracles-button>
    </miracles-button-group>
    <br/><br/>
    <miracles-button-group>
      <miracles-button type="default">Cancel</miracles-button>
      <miracles-button type="activity">Accept</miracles-button>
      <miracles-button type="success">Success</miracles-button>
    </miracles-button-group>
    <br/><br/>
    <miracles-button-group margin="large">
      <miracles-button type="default">Cancel</miracles-button>
      <miracles-button type="activity">Accept</miracles-button>
      <miracles-button type="success">Success</miracles-button>
    </miracles-button-group>
    <br/><br/>
    <miracles-button-group list>
      <miracles-button type="default">Cancel</miracles-button>
      <miracles-button type="default">Accept</miracles-button>
      <miracles-button type="default">Success</miracles-button>
    </miracles-button-group>
    <br/><br/>
    <miracles-button-group direction="vertical">
      <miracles-button type="default">Cancel</miracles-button>
      <miracles-button type="activity">Accept</miracles-button>
      <miracles-button type="success">Success</miracles-button>
    </miracles-button-group>
    <miracles-button-group direction="vertical" border>
      <miracles-button type="default">Cancel</miracles-button>
      <miracles-button type="activity">Accept</miracles-button>
      <miracles-button type="success">Success Button</miracles-button>
    </miracles-button-group>
    <miracles-button-group direction="vertical" margin="small" border>
      <miracles-button type="default">Cancel</miracles-button>
      <miracles-button type="activity">Accept</miracles-button>
      <miracles-button type="success">Success Button</miracles-button>
    </miracles-button-group>
    <miracles-button-group direction="vertical" margin="small">
      <miracles-button type="default">Cancel</miracles-button>
      <miracles-button type="activity">Accept</miracles-button>
      <miracles-button type="success">Success Button</miracles-button>
    </miracles-button-group>
    <miracles-button-group direction="vertical" list>
      <miracles-button icon_size="small" icon="arrow_drop_down" type="default">Cancel</miracles-button>
      <miracles-button icon_size="small" icon="arrow_drop_down" type="default">Accept</miracles-button>
      <miracles-button icon_size="small" icon="arrow_drop_down" type="default">Success</miracles-button>
    </miracles-button-group>
    <miracles-button-group direction="vertical" list>
      <miracles-button loading type="default">Cancel</miracles-button>
      <miracles-button loading type="default">Accept</miracles-button>
      <miracles-button loading type="default">Success</miracles-button>
    </miracles-button-group>
  </div>
</template>

<script>
import './index.scss'
export default {
  components: {},
  name: 'button_demo',
  methods: {}
}
</script>
