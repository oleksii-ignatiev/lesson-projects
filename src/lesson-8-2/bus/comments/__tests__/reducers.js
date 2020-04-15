// Reducer
import { commentsReducer } from "../reducer";
import { commentReducer } from "../commentReducer";

// Actions
import { commentsActions } from "../actions";
import { commentActions } from "../commentActions";

describe("comments Reducer", () => {
  test("should return initial state by default", () => {
    expect(commentsReducer(void 0, {})).toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
    expect(commentReducer(void 0, {})).toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
  });
  test("should handle START_FETCHING action", () => {
    expect(commentsReducer(void 0, commentsActions.startFetching()))
      .toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": true,
      }
    `);
    expect(commentsReducer(void 0, commentActions.startFetching()))
      .toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
  });
  test("should handle STOP_FETCHING action", () => {
    expect(commentsReducer(void 0, commentsActions.stopFetching()))
      .toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
    expect(commentsReducer(void 0, commentActions.stopFetching()))
      .toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
  });
  test("should handle FILL action", () => {
    expect(
      commentsReducer(void 0, commentsActions.fill({ name: "Some Comment" }))
    ).toMatchInlineSnapshot(`
      Object {
        "data": Object {
          "name": "Some Comment",
        },
        "error": null,
        "isFetching": false,
      }
    `);
    expect(
      commentsReducer(void 0, commentActions.fill({ name: "Some Comment" }))
    ).toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
  });
  test("should handle SET_FETCHING_ERROR action", () => {
    expect(
      commentsReducer(
        void 0,
        commentsActions.setFetchingError("We have a problem")
      )
    ).toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": "We have a problem",
        "isFetching": false,
      }
    `);
    expect(
      commentsReducer(
        void 0,
        commentActions.setFetchingError("We have a problem")
      )
    ).toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
  });
});
