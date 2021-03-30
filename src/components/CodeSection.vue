
<template>
  <a-textarea
    v-model="codeValue"
    placeholder="Input your function here"
    @change="handleCodeChange"
    :auto-size="{ minRows: 3, maxRows: 5 }"
  />
  <a-input v-model="caseInput" placeholder="Input test input" @change="onCaseInputChange"/>
  <a-button :disabled="isAddCaseButtonDisable" @click="addCase">Add case</a-button>
  <TestCase v-for="(testCase, index) in testCases" :key="index" :testCase="testCase" :functionString="codeValue" :paramNames="paramNames"/>
</template>

<script>
import TestCase from "./TestCase"
export default {
  components: {
    TestCase
  },
  data() {
    return {
      isAddCaseButtonDisable: true,
      caseInput: "",
      codeValue: "",
      testCases: [],
      functionName: "",
      paramNames: [],
    };
  },
  methods: {
    handleCodeChange(e) {
      this.codeValue = e.target.value;
    },
    onCaseInputChange(e) {
        const value = e.target.value;
        const params = value.trim().split(',');


        this.isAddCaseButtonDisable = params.length !== this.paramNames.length || value === null || value === undefined || value === "";
        this.caseInput = value;
    },
    addCase() {
        
        const params = this.caseInput.trim().split(",");
console.log(params)
        const testCase = {
            functionName: this.functionName,
            params
        }
        this.testCases = [...this.testCases, testCase];
        console.log(this.testCases)
    }
  },
  watch: {
    codeValue(newVal) {
      const codeValue = newVal;
      const startIndexOfFunction = codeValue.indexOf("function");
      if (startIndexOfFunction != -1) {
        const startIndexOfFunctionName = startIndexOfFunction + 9;
        const startIndexOfParams = codeValue.indexOf(
          "(",
          startIndexOfFunctionName
        );
        const endIndexOfParams = codeValue.indexOf(")", startIndexOfParams);
        if (startIndexOfParams !== -1 && endIndexOfParams !== -1) {
          this.functionName = codeValue
            .substring(startIndexOfFunctionName, startIndexOfParams)
            .trim();
          this.paramNames = codeValue
            .substring(startIndexOfParams + 1, endIndexOfParams)
            .split(",");
        }
      }
    },
  },
};
</script>

<style>
</style>