# `gatewayConnection` Submodule <a name="`gatewayConnection` Submodule" id="@cdktf/provider-upcloud.gatewayConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GatewayConnection <a name="GatewayConnection" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection"></a>

Represents a {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection upcloud_gateway_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer"></a>

```typescript
import { gatewayConnection } from '@cdktf/provider-upcloud'

new gatewayConnection.GatewayConnection(scope: Construct, id: string, config: GatewayConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig">GatewayConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig">GatewayConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.putLocalRoute">putLocalRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.putRemoteRoute">putRemoteRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetLocalRoute">resetLocalRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetRemoteRoute">resetRemoteRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocalRoute` <a name="putLocalRoute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.putLocalRoute"></a>

```typescript
public putLocalRoute(value: IResolvable | GatewayConnectionLocalRoute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.putLocalRoute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>[]

---

##### `putRemoteRoute` <a name="putRemoteRoute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.putRemoteRoute"></a>

```typescript
public putRemoteRoute(value: IResolvable | GatewayConnectionRemoteRoute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.putRemoteRoute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocalRoute` <a name="resetLocalRoute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetLocalRoute"></a>

```typescript
public resetLocalRoute(): void
```

##### `resetRemoteRoute` <a name="resetRemoteRoute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetRemoteRoute"></a>

```typescript
public resetRemoteRoute(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GatewayConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isConstruct"></a>

```typescript
import { gatewayConnection } from '@cdktf/provider-upcloud'

gatewayConnection.GatewayConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isTerraformElement"></a>

```typescript
import { gatewayConnection } from '@cdktf/provider-upcloud'

gatewayConnection.GatewayConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isTerraformResource"></a>

```typescript
import { gatewayConnection } from '@cdktf/provider-upcloud'

gatewayConnection.GatewayConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.generateConfigForImport"></a>

```typescript
import { gatewayConnection } from '@cdktf/provider-upcloud'

gatewayConnection.GatewayConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GatewayConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GatewayConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GatewayConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GatewayConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.localRoute">localRoute</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList">GatewayConnectionLocalRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.remoteRoute">remoteRoute</a></code> | <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList">GatewayConnectionRemoteRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.tunnels">tunnels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.gatewayInput">gatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.localRouteInput">localRouteInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.remoteRouteInput">remoteRouteInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.gateway">gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `localRoute`<sup>Required</sup> <a name="localRoute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.localRoute"></a>

```typescript
public readonly localRoute: GatewayConnectionLocalRouteList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList">GatewayConnectionLocalRouteList</a>

---

##### `remoteRoute`<sup>Required</sup> <a name="remoteRoute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.remoteRoute"></a>

```typescript
public readonly remoteRoute: GatewayConnectionRemoteRouteList;
```

- *Type:* <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList">GatewayConnectionRemoteRouteList</a>

---

##### `tunnels`<sup>Required</sup> <a name="tunnels" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.tunnels"></a>

```typescript
public readonly tunnels: string[];
```

- *Type:* string[]

---

##### `gatewayInput`<sup>Optional</sup> <a name="gatewayInput" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.gatewayInput"></a>

```typescript
public readonly gatewayInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localRouteInput`<sup>Optional</sup> <a name="localRouteInput" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.localRouteInput"></a>

```typescript
public readonly localRouteInput: IResolvable | GatewayConnectionLocalRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `remoteRouteInput`<sup>Optional</sup> <a name="remoteRouteInput" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.remoteRouteInput"></a>

```typescript
public readonly remoteRouteInput: IResolvable | GatewayConnectionRemoteRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GatewayConnectionConfig <a name="GatewayConnectionConfig" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.Initializer"></a>

```typescript
import { gatewayConnection } from '@cdktf/provider-upcloud'

const gatewayConnectionConfig: gatewayConnection.GatewayConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.gateway">gateway</a></code> | <code>string</code> | The ID of the upcloud_gateway resource to which the connection belongs. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.name">name</a></code> | <code>string</code> | The name of the connection, should be unique within the gateway. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#id GatewayConnection#id}. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.localRoute">localRoute</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>[]</code> | local_route block. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.remoteRoute">remoteRoute</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>[]</code> | remote_route block. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.type">type</a></code> | <code>string</code> | The type of the connection; currently the only supported type is 'ipsec'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gateway`<sup>Required</sup> <a name="gateway" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.gateway"></a>

```typescript
public readonly gateway: string;
```

- *Type:* string

The ID of the upcloud_gateway resource to which the connection belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#gateway GatewayConnection#gateway}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the connection, should be unique within the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#name GatewayConnection#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#id GatewayConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localRoute`<sup>Optional</sup> <a name="localRoute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.localRoute"></a>

```typescript
public readonly localRoute: IResolvable | GatewayConnectionLocalRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>[]

local_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#local_route GatewayConnection#local_route}

---

##### `remoteRoute`<sup>Optional</sup> <a name="remoteRoute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.remoteRoute"></a>

```typescript
public readonly remoteRoute: IResolvable | GatewayConnectionRemoteRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>[]

remote_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#remote_route GatewayConnection#remote_route}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the connection; currently the only supported type is 'ipsec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#type GatewayConnection#type}

---

### GatewayConnectionLocalRoute <a name="GatewayConnectionLocalRoute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.Initializer"></a>

```typescript
import { gatewayConnection } from '@cdktf/provider-upcloud'

const gatewayConnectionLocalRoute: gatewayConnection.GatewayConnectionLocalRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.property.name">name</a></code> | <code>string</code> | Name of the route. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.property.staticNetwork">staticNetwork</a></code> | <code>string</code> | Destination prefix of the route; needs to be a valid IPv4 prefix. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.property.type">type</a></code> | <code>string</code> | Type of route; currently the only supported type is 'static'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#name GatewayConnection#name}

---

##### `staticNetwork`<sup>Required</sup> <a name="staticNetwork" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.property.staticNetwork"></a>

```typescript
public readonly staticNetwork: string;
```

- *Type:* string

Destination prefix of the route; needs to be a valid IPv4 prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#static_network GatewayConnection#static_network}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of route; currently the only supported type is 'static'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#type GatewayConnection#type}

---

### GatewayConnectionRemoteRoute <a name="GatewayConnectionRemoteRoute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.Initializer"></a>

```typescript
import { gatewayConnection } from '@cdktf/provider-upcloud'

const gatewayConnectionRemoteRoute: gatewayConnection.GatewayConnectionRemoteRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.property.name">name</a></code> | <code>string</code> | Name of the route. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.property.staticNetwork">staticNetwork</a></code> | <code>string</code> | Destination prefix of the route; needs to be a valid IPv4 prefix. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.property.type">type</a></code> | <code>string</code> | Type of route; currently the only supported type is 'static'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#name GatewayConnection#name}

---

##### `staticNetwork`<sup>Required</sup> <a name="staticNetwork" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.property.staticNetwork"></a>

```typescript
public readonly staticNetwork: string;
```

- *Type:* string

Destination prefix of the route; needs to be a valid IPv4 prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#static_network GatewayConnection#static_network}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of route; currently the only supported type is 'static'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/upcloudltd/upcloud/5.2.3/docs/resources/gateway_connection#type GatewayConnection#type}

---

## Classes <a name="Classes" id="Classes"></a>

### GatewayConnectionLocalRouteList <a name="GatewayConnectionLocalRouteList" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer"></a>

```typescript
import { gatewayConnection } from '@cdktf/provider-upcloud'

new gatewayConnection.GatewayConnectionLocalRouteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.get"></a>

```typescript
public get(index: number): GatewayConnectionLocalRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GatewayConnectionLocalRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>[]

---


### GatewayConnectionLocalRouteOutputReference <a name="GatewayConnectionLocalRouteOutputReference" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer"></a>

```typescript
import { gatewayConnection } from '@cdktf/provider-upcloud'

new gatewayConnection.GatewayConnectionLocalRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.staticNetworkInput">staticNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.staticNetwork">staticNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `staticNetworkInput`<sup>Optional</sup> <a name="staticNetworkInput" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.staticNetworkInput"></a>

```typescript
public readonly staticNetworkInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `staticNetwork`<sup>Required</sup> <a name="staticNetwork" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.staticNetwork"></a>

```typescript
public readonly staticNetwork: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GatewayConnectionLocalRoute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionLocalRoute">GatewayConnectionLocalRoute</a>

---


### GatewayConnectionRemoteRouteList <a name="GatewayConnectionRemoteRouteList" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer"></a>

```typescript
import { gatewayConnection } from '@cdktf/provider-upcloud'

new gatewayConnection.GatewayConnectionRemoteRouteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.get"></a>

```typescript
public get(index: number): GatewayConnectionRemoteRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GatewayConnectionRemoteRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>[]

---


### GatewayConnectionRemoteRouteOutputReference <a name="GatewayConnectionRemoteRouteOutputReference" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer"></a>

```typescript
import { gatewayConnection } from '@cdktf/provider-upcloud'

new gatewayConnection.GatewayConnectionRemoteRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.staticNetworkInput">staticNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.staticNetwork">staticNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `staticNetworkInput`<sup>Optional</sup> <a name="staticNetworkInput" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.staticNetworkInput"></a>

```typescript
public readonly staticNetworkInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `staticNetwork`<sup>Required</sup> <a name="staticNetwork" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.staticNetwork"></a>

```typescript
public readonly staticNetwork: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GatewayConnectionRemoteRoute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-upcloud.gatewayConnection.GatewayConnectionRemoteRoute">GatewayConnectionRemoteRoute</a>

---



