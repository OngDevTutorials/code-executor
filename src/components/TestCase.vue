<template>
<div>
    <h3>{{testCaseTitle}}</h3>
    <a-button @click="executeFunction">Execute</a-button>
</div>
</template>

<script>
export default {
    props: ["testCase", "functionString", "paramNames"],
    methods: {
        executeFunction() {
            const functionStr = this.functionString + `${this.testCase.functionName}(${this.paramNames.toString()})`
            const func = new Function(...this.paramNames,functionStr);
            console.log(func)
            func(...this.testCase.params);
        }
    },
    computed: {
        testCaseTitle() {
            return `${this.testCase.functionName}(${this.testCase.params.toString()});`
        }
    }
}
</script>

<style>

</style>