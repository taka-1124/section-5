import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createImcompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromImcomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createImcompleteList = (text) => {
  //divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  //listタグを生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグを作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //　押された完了ボタンの親タグ(div)を完了リストに移動
    deleteFromImcomplete(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // DIV以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグを生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      //　押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backbutton.parentNode.firstElementChild.innerText;
      createImcompleteList(text);
    });

    // Divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    //完了のリストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(完了)タグを作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //　押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromImcomplete(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
