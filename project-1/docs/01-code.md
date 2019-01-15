```
.background-image-block {
  height: 100%;
  width: 100%;
  background-size: cover;
  /**
   * ! Do not optimize background-repeat and background-position for full CSS functionality !
   * ! Otherwise it will override the CSS of any content piece bubble !
   * MVP: Ignore PhpStorm warning!
   */
  background-repeat: no-repeat;
  background-position: center;
}
```