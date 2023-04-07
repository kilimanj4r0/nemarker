const router = require('express').Router();
const workflow_json = require('./workflow.json')

module.exports = router;



router.get("/workflow", (req, resp) => {
    const {command, name} = req.query;
    console.log('session', req.session);
    let {flow_name, state_name} = req.session.workflow || {};
    if (command === 'init') {
        flow_name = name;
        state_name = workflow_json.flows[flow_name].init_state;
    }
    else if (command === 'event') {
        const event_name = name;
        state_name = workflow_json.flows[flow_name].states[state_name].events[event_name]
    }
    else if (command === 'exit') {
        flow_name = undefined;
        state_name = undefined;
    }
    req.session.workflow = {flow_name, state_name};
    console.log('done', flow_name, state_name);
    resp.send({flow_name, state_name});
})