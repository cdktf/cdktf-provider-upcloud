# `managedDatabaseUser` Submodule <a name="`managedDatabaseUser` Submodule" id="@cdktf/provider-upcloud.managedDatabaseUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagedDatabaseUser <a name="ManagedDatabaseUser" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user upcloud_managed_database_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

new managedDatabaseUser.ManagedDatabaseUser(scope: Construct, id: string, config: ManagedDatabaseUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig">ManagedDatabaseUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig">ManagedDatabaseUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putOpensearchAccessControl">putOpensearchAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putPgAccessControl">putPgAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putRedisAccessControl">putRedisAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetOpensearchAccessControl">resetOpensearchAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetPgAccessControl">resetPgAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetRedisAccessControl">resetRedisAccessControl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOpensearchAccessControl` <a name="putOpensearchAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putOpensearchAccessControl"></a>

```typescript
public putOpensearchAccessControl(value: ManagedDatabaseUserOpensearchAccessControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putOpensearchAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControl">ManagedDatabaseUserOpensearchAccessControl</a>

---

##### `putPgAccessControl` <a name="putPgAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putPgAccessControl"></a>

```typescript
public putPgAccessControl(value: ManagedDatabaseUserPgAccessControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putPgAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a>

---

##### `putRedisAccessControl` <a name="putRedisAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putRedisAccessControl"></a>

```typescript
public putRedisAccessControl(value: ManagedDatabaseUserRedisAccessControl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.putRedisAccessControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpensearchAccessControl` <a name="resetOpensearchAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetOpensearchAccessControl"></a>

```typescript
public resetOpensearchAccessControl(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPgAccessControl` <a name="resetPgAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetPgAccessControl"></a>

```typescript
public resetPgAccessControl(): void
```

##### `resetRedisAccessControl` <a name="resetRedisAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.resetRedisAccessControl"></a>

```typescript
public resetRedisAccessControl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ManagedDatabaseUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isConstruct"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

managedDatabaseUser.ManagedDatabaseUser.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformElement"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

managedDatabaseUser.ManagedDatabaseUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformResource"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

managedDatabaseUser.ManagedDatabaseUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.generateConfigForImport"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

managedDatabaseUser.ManagedDatabaseUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ManagedDatabaseUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ManagedDatabaseUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ManagedDatabaseUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagedDatabaseUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.opensearchAccessControl">opensearchAccessControl</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference">ManagedDatabaseUserOpensearchAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.pgAccessControl">pgAccessControl</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference">ManagedDatabaseUserPgAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.redisAccessControl">redisAccessControl</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference">ManagedDatabaseUserRedisAccessControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.authenticationInput">authenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.opensearchAccessControlInput">opensearchAccessControlInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControl">ManagedDatabaseUserOpensearchAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.pgAccessControlInput">pgAccessControlInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.redisAccessControlInput">redisAccessControlInput</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.authentication">authentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `opensearchAccessControl`<sup>Required</sup> <a name="opensearchAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.opensearchAccessControl"></a>

```typescript
public readonly opensearchAccessControl: ManagedDatabaseUserOpensearchAccessControlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference">ManagedDatabaseUserOpensearchAccessControlOutputReference</a>

---

##### `pgAccessControl`<sup>Required</sup> <a name="pgAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.pgAccessControl"></a>

```typescript
public readonly pgAccessControl: ManagedDatabaseUserPgAccessControlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference">ManagedDatabaseUserPgAccessControlOutputReference</a>

---

##### `redisAccessControl`<sup>Required</sup> <a name="redisAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.redisAccessControl"></a>

```typescript
public readonly redisAccessControl: ManagedDatabaseUserRedisAccessControlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference">ManagedDatabaseUserRedisAccessControlOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `opensearchAccessControlInput`<sup>Optional</sup> <a name="opensearchAccessControlInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.opensearchAccessControlInput"></a>

```typescript
public readonly opensearchAccessControlInput: ManagedDatabaseUserOpensearchAccessControl;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControl">ManagedDatabaseUserOpensearchAccessControl</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `pgAccessControlInput`<sup>Optional</sup> <a name="pgAccessControlInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.pgAccessControlInput"></a>

```typescript
public readonly pgAccessControlInput: ManagedDatabaseUserPgAccessControl;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a>

---

##### `redisAccessControlInput`<sup>Optional</sup> <a name="redisAccessControlInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.redisAccessControlInput"></a>

```typescript
public readonly redisAccessControlInput: ManagedDatabaseUserRedisAccessControl;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.authentication"></a>

```typescript
public readonly authentication: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManagedDatabaseUserConfig <a name="ManagedDatabaseUserConfig" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.Initializer"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

const managedDatabaseUserConfig: managedDatabaseUser.ManagedDatabaseUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.service">service</a></code> | <code>string</code> | Service's UUID for which this user belongs to. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.username">username</a></code> | <code>string</code> | Name of the database user. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.authentication">authentication</a></code> | <code>string</code> | MySQL only, authentication type. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#id ManagedDatabaseUser#id}. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.opensearchAccessControl">opensearchAccessControl</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControl">ManagedDatabaseUserOpensearchAccessControl</a></code> | opensearch_access_control block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.password">password</a></code> | <code>string</code> | Password for the database user. Defaults to a random value. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.pgAccessControl">pgAccessControl</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a></code> | pg_access_control block. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.redisAccessControl">redisAccessControl</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a></code> | redis_access_control block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Service's UUID for which this user belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#service ManagedDatabaseUser#service}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Name of the database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#username ManagedDatabaseUser#username}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.authentication"></a>

```typescript
public readonly authentication: string;
```

- *Type:* string

MySQL only, authentication type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#authentication ManagedDatabaseUser#authentication}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#id ManagedDatabaseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opensearchAccessControl`<sup>Optional</sup> <a name="opensearchAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.opensearchAccessControl"></a>

```typescript
public readonly opensearchAccessControl: ManagedDatabaseUserOpensearchAccessControl;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControl">ManagedDatabaseUserOpensearchAccessControl</a>

opensearch_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#opensearch_access_control ManagedDatabaseUser#opensearch_access_control}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for the database user. Defaults to a random value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#password ManagedDatabaseUser#password}

---

##### `pgAccessControl`<sup>Optional</sup> <a name="pgAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.pgAccessControl"></a>

```typescript
public readonly pgAccessControl: ManagedDatabaseUserPgAccessControl;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a>

pg_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#pg_access_control ManagedDatabaseUser#pg_access_control}

---

##### `redisAccessControl`<sup>Optional</sup> <a name="redisAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserConfig.property.redisAccessControl"></a>

```typescript
public readonly redisAccessControl: ManagedDatabaseUserRedisAccessControl;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a>

redis_access_control block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#redis_access_control ManagedDatabaseUser#redis_access_control}

---

### ManagedDatabaseUserOpensearchAccessControl <a name="ManagedDatabaseUserOpensearchAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControl.Initializer"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

const managedDatabaseUserOpensearchAccessControl: managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControl.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules">ManagedDatabaseUserOpensearchAccessControlRules</a>[]</code> | rules block. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControl.property.rules"></a>

```typescript
public readonly rules: IResolvable | ManagedDatabaseUserOpensearchAccessControlRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules">ManagedDatabaseUserOpensearchAccessControlRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#rules ManagedDatabaseUser#rules}

---

### ManagedDatabaseUserOpensearchAccessControlRules <a name="ManagedDatabaseUserOpensearchAccessControlRules" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules.Initializer"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

const managedDatabaseUserOpensearchAccessControlRules: managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules.property.index">index</a></code> | <code>string</code> | Set index name, pattern or top level API. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules.property.permission">permission</a></code> | <code>string</code> | Set permission access. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

Set index name, pattern or top level API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#index ManagedDatabaseUser#index}

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Set permission access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#permission ManagedDatabaseUser#permission}

---

### ManagedDatabaseUserPgAccessControl <a name="ManagedDatabaseUserPgAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl.Initializer"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

const managedDatabaseUserPgAccessControl: managedDatabaseUser.ManagedDatabaseUserPgAccessControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl.property.allowReplication">allowReplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant replication privilege. |

---

##### `allowReplication`<sup>Optional</sup> <a name="allowReplication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl.property.allowReplication"></a>

```typescript
public readonly allowReplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant replication privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#allow_replication ManagedDatabaseUser#allow_replication}

---

### ManagedDatabaseUserRedisAccessControl <a name="ManagedDatabaseUserRedisAccessControl" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.Initializer"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

const managedDatabaseUserRedisAccessControl: managedDatabaseUser.ManagedDatabaseUserRedisAccessControl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.categories">categories</a></code> | <code>string[]</code> | Set access control to all commands in specified categories. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.channels">channels</a></code> | <code>string[]</code> | Set access control to Pub/Sub channels. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.commands">commands</a></code> | <code>string[]</code> | Set access control to commands. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.keys">keys</a></code> | <code>string[]</code> | Set access control to keys. |

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.categories"></a>

```typescript
public readonly categories: string[];
```

- *Type:* string[]

Set access control to all commands in specified categories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#categories ManagedDatabaseUser#categories}

---

##### `channels`<sup>Optional</sup> <a name="channels" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.channels"></a>

```typescript
public readonly channels: string[];
```

- *Type:* string[]

Set access control to Pub/Sub channels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#channels ManagedDatabaseUser#channels}

---

##### `commands`<sup>Optional</sup> <a name="commands" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

Set access control to commands.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#commands ManagedDatabaseUser#commands}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

Set access control to keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.9.1/docs/resources/managed_database_user#keys ManagedDatabaseUser#keys}

---

## Classes <a name="Classes" id="Classes"></a>

### ManagedDatabaseUserOpensearchAccessControlOutputReference <a name="ManagedDatabaseUserOpensearchAccessControlOutputReference" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.Initializer"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

new managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.putRules">putRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.putRules"></a>

```typescript
public putRules(value: IResolvable | ManagedDatabaseUserOpensearchAccessControlRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules">ManagedDatabaseUserOpensearchAccessControlRules</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList">ManagedDatabaseUserOpensearchAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules">ManagedDatabaseUserOpensearchAccessControlRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControl">ManagedDatabaseUserOpensearchAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.property.rules"></a>

```typescript
public readonly rules: ManagedDatabaseUserOpensearchAccessControlRulesList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList">ManagedDatabaseUserOpensearchAccessControlRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | ManagedDatabaseUserOpensearchAccessControlRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules">ManagedDatabaseUserOpensearchAccessControlRules</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseUserOpensearchAccessControl;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControl">ManagedDatabaseUserOpensearchAccessControl</a>

---


### ManagedDatabaseUserOpensearchAccessControlRulesList <a name="ManagedDatabaseUserOpensearchAccessControlRulesList" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.Initializer"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

new managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.get"></a>

```typescript
public get(index: number): ManagedDatabaseUserOpensearchAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules">ManagedDatabaseUserOpensearchAccessControlRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDatabaseUserOpensearchAccessControlRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules">ManagedDatabaseUserOpensearchAccessControlRules</a>[]

---


### ManagedDatabaseUserOpensearchAccessControlRulesOutputReference <a name="ManagedDatabaseUserOpensearchAccessControlRulesOutputReference" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.Initializer"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

new managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules">ManagedDatabaseUserOpensearchAccessControlRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManagedDatabaseUserOpensearchAccessControlRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserOpensearchAccessControlRules">ManagedDatabaseUserOpensearchAccessControlRules</a>

---


### ManagedDatabaseUserPgAccessControlOutputReference <a name="ManagedDatabaseUserPgAccessControlOutputReference" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

new managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resetAllowReplication">resetAllowReplication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowReplication` <a name="resetAllowReplication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.resetAllowReplication"></a>

```typescript
public resetAllowReplication(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.allowReplicationInput">allowReplicationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.allowReplication">allowReplication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowReplicationInput`<sup>Optional</sup> <a name="allowReplicationInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.allowReplicationInput"></a>

```typescript
public readonly allowReplicationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowReplication`<sup>Required</sup> <a name="allowReplication" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.allowReplication"></a>

```typescript
public readonly allowReplication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseUserPgAccessControl;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserPgAccessControl">ManagedDatabaseUserPgAccessControl</a>

---


### ManagedDatabaseUserRedisAccessControlOutputReference <a name="ManagedDatabaseUserRedisAccessControlOutputReference" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer"></a>

```typescript
import { managedDatabaseUser } from '@cdktf/provider-upcloud'

new managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetCategories">resetCategories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetChannels">resetChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetCommands">resetCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetKeys">resetKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCategories` <a name="resetCategories" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetCategories"></a>

```typescript
public resetCategories(): void
```

##### `resetChannels` <a name="resetChannels" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetChannels"></a>

```typescript
public resetChannels(): void
```

##### `resetCommands` <a name="resetCommands" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetCommands"></a>

```typescript
public resetCommands(): void
```

##### `resetKeys` <a name="resetKeys" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.resetKeys"></a>

```typescript
public resetKeys(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.categoriesInput">categoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.channelsInput">channelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.commandsInput">commandsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.keysInput">keysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.categories">categories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.channels">channels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.commands">commands</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.keys">keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoriesInput`<sup>Optional</sup> <a name="categoriesInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.categoriesInput"></a>

```typescript
public readonly categoriesInput: string[];
```

- *Type:* string[]

---

##### `channelsInput`<sup>Optional</sup> <a name="channelsInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.channelsInput"></a>

```typescript
public readonly channelsInput: string[];
```

- *Type:* string[]

---

##### `commandsInput`<sup>Optional</sup> <a name="commandsInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.commandsInput"></a>

```typescript
public readonly commandsInput: string[];
```

- *Type:* string[]

---

##### `keysInput`<sup>Optional</sup> <a name="keysInput" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.keysInput"></a>

```typescript
public readonly keysInput: string[];
```

- *Type:* string[]

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.categories"></a>

```typescript
public readonly categories: string[];
```

- *Type:* string[]

---

##### `channels`<sup>Required</sup> <a name="channels" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.channels"></a>

```typescript
public readonly channels: string[];
```

- *Type:* string[]

---

##### `commands`<sup>Required</sup> <a name="commands" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.commands"></a>

```typescript
public readonly commands: string[];
```

- *Type:* string[]

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManagedDatabaseUserRedisAccessControl;
```

- *Type:* <a href="#@cdktf/provider-upcloud.managedDatabaseUser.ManagedDatabaseUserRedisAccessControl">ManagedDatabaseUserRedisAccessControl</a>

---



