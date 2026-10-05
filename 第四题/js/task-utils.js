/**
 * 返回出现在数组 a 中、但没有出现在数组 b 中的任务。
 *
 * @param {string[]} a
 * @param {string[]} b
 * @returns {string[]}
 */
function difference(a, b) {
  // TODO 目标一：找出差异任务
const result = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      result.push(a[i]);
    }
  }
  return result;
}

/**
 * 返回所有任务清单中共同包含的任务。
 *
 * @param {string[][]} taskLists 由多份任务数组组成的数组
 * @returns {string[]}
 */
function intersection(taskLists) {
  // TODO 目标二：找出共同任务
  // 想一想：taskLists 为空时应该返回什么？
if (taskLists.length === 0) {
  return [];
}
const result = [];
const firstList = taskLists[0];
for (let i = 0; i < firstList.length; i++) {
  const task = firstList[i];
  let inALL = true;
  for (let j = 1; j < taskLists.length; j++) {
    if (!taskLists[j].includes(task)) {
      inALL = false;
      break;
    }
  }
  if (inALL) {
    result.push(task);
  }
}
return result;
}

/**
 * 合并多份任务清单，并去除重复任务。
 *
 * @param {string[][]} taskLists 由多份任务数组组成的数组
 * @returns {string[]}
 */
function union(taskLists) {
  // TODO 目标三：汇总所有任务
  const taskSet = new Set();

  for (const list of taskLists) {
    for (const task of list) {
      taskSet.add(task); 
    }
  }

  return [...taskSet]; 
}

// 将函数提供给页面中的index.js使用。
// 这一部分已经写好，不需要修改。
window.TaskUtils = {
  difference,
  intersection,
  union,
};
