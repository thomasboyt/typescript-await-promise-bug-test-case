interface PromiseExtender extends Promise<any> {
}

function getPromise(): Promise<any> {
  return new Promise((resolve, reject) => {});
}

function getPromiseExtender(): PromiseExtender {
  return new Promise((resolve, reject) => {});
}

async function main() {
  await getPromise();
  await getPromiseExtender();
}