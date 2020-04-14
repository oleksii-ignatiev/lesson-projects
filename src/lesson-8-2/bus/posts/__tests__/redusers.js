// Reducer
import { postsReducer } from "../reducer";
import { postReducer } from "../postReducer";

// Actions
import { postsActions } from "../actions";
import { postActions } from "../postActions";

describe("posts Reducer", () => {
  test("should return initial state by default", () => {
    expect(postsReducer(void 0, {})).toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
    expect(postReducer(void 0, {})).toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
  });
  test("should handle START_FETCHING action", () => {
    expect(postsReducer(void 0, postsActions.startFetching()))
      .toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": true,
      }
    `);
    expect(postsReducer(void 0, postActions.startFetching()))
      .toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
  });
  test("should handle STOP_FETCHING action", () => {
    expect(postsReducer(void 0, postsActions.stopFetching()))
      .toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
    expect(postsReducer(void 0, postActions.stopFetching()))
      .toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
  });
  test("should handle FILL action", () => {
    expect(postsReducer(void 0, postsActions.fill({ name: "Some post" })))
      .toMatchInlineSnapshot(`
      Object {
        "data": Object {
          "name": "Some post",
        },
        "error": null,
        "isFetching": false,
      }
    `);
    expect(postsReducer(void 0, postActions.fill({ name: "Some post" })))
      .toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
  });
  test("should handle SET_FETCHING_ERROR action", () => {
    expect(
      postsReducer(void 0, postsActions.setFetchingError("We have a problem"))
    ).toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": "We have a problem",
        "isFetching": false,
      }
    `);
    expect(
      postsReducer(void 0, postActions.setFetchingError("We have a problem"))
    ).toMatchInlineSnapshot(`
      Object {
        "data": null,
        "error": null,
        "isFetching": false,
      }
    `);
  });
});
