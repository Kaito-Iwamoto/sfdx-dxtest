({
    /**
     * 初期化
     * @param {*} component コンポーネント
     * @param {*} event イベント
     * @param {*} helper ヘルパー
     */
      onInit: function (component, event, helper) {
        helper.init(component, event);
      },
      /**
       * Auraイベント
       * @param {*} component コンポーネント
       * @param {*} event イベント
       * @param {*} helper ヘルパー
       */
      onAuraEvent: function (component, event, helper) {
        helper.fireAuraEvent(event.getParam("name"), event.getParam("params"));
      },
      /**
       * ロードフラグ設定
       * @param {*} component コンポーネント
       * @param {*} event イベント
       * @param {*} helper ヘルパー
       */
      onSetLoading: function (component, event, helper) {
        helper.setLoading(component, event.getParam("isLoading"));
      },
      /**
       * QuickActionを閉じる
       */
      closeAction: function () {
        $A.get("e.force:closeQuickAction").fire();
      }
    });